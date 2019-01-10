<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plan;
use App\PaypalTransaction;
use App\StripeWebhook;
use Carbon\Carbon;
class PlanController extends APIController
{
		protected $subTotal = 0;
    protected $total = 0;
    protected $tax = 0;

    function __construct(){
    	$this->model = new Plan();

    	$this->notRequired = array(
    		'start', 'end', 'payment_type', 'payment_payload', 'payment_payload_value'
    	);
    }

    public function create(Request $request){
    	$data = $request->all();
    	$data['order_number'] = $this->getOrderNumber();
    	$this->insertDB($data);
    	return $this->response();
    }

    public function retrieve(Request $request){
    	$data = $request->all();
    	$cards = $this->getPaymentMethod('account_id', $data['account_id']);
    	$this->retrieveDB($data);
      $result = $this->response['data'];

      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $this->subTotal += $result[$i]['total_amount'];
          $this->response['data'][$i]['months'] = intval($result[$i]['total_amount']) / intval($result[$i]['price']);
          $i++;
        }
      }
      
      $this->response['method'] = $cards;
      $this->response['sub_total'] = $this->subTotal;
      $this->response['tax'] = $this->tax;
      $this->response['total'] = $this->subTotal - $this->tax;
      return $this->response();
    }


    public function retrieveSummary(Request $request){
      $data = $request->all();
      $this->retrieveDB($data);
      $result = $this->response['data'];
      $cards = $this->getPaymentMethod('account_id', $data['account_id']);
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
        	$this->response['data'][$i]['months'] = intval($result[$i]['total_amount']) / intval($result[$i]['price']);
          if(($result[$i]['payment_type'] == 'authorized' || $result[$i]['payment_type'] == 'express') && $result[$i]['payment_payload'] == 'credit_card'){
            $this->response['data'][$i]['method'] = $this->getPaymentMethod('id', $result[$i]['payment_payload_value']);
          }else if($result[$i]['payment_type'] == 'express' && $result[$i]['payment_payload'] == 'paypal'){
            $this->response['data'][$i]['method'] = $this->getPaypalTransaction($result[$i]['payment_payload_value']);
          }else{
            $this->response['data'][$i]['method'] = null;
          }
          $i++;
        }
      }
      
      $this->response['method'] = $cards;
      return $this->response();
    }


    public function update(Request $request){
    	$data = $request->all();
      $accountId = $data['account_id'];
      $id = $data['id'];
      $tax = $data['tax'];
      $subTotal = $data['sub_total'];
      $total = $data['total'];
      $paymentType = $data['payment_type'];
      $paymentPayload = $data['payment_payload'];
      $paymentPayloadValue = $data['payment_payload_value'];
      $email = $data['email'];
      $title = 'Charge for order number'.$data['order_number'];
      $updateData = array(
        'id'  => $id,
        'tax' => $tax,
        'sub_total' => $subTotal,
        'total' => $total,
        'payment_type' => $paymentType,
        'payment_payload' => $paymentPayload,
        'status'  => 'completed',
        'updated_at'  => Carbon::now()
      );
      if(($paymentType == 'authorized' || $paymentType == 'express') && $paymentPayload == 'credit_card'){
        $paymentMethod = $this->getPaymentMethod('id', $paymentPayloadValue);
        $updateData['payment_payload_value'] = $paymentPayloadValue;
        $charge = null;
        if($paymentMethod->payload == 'credit_card'){
          $stripe = new StripeWebhook();
          $charge = $stripe->chargeCustomer($email, $paymentMethod->stripe->source, $paymentMethod->stripe->customer, $total, $title);
        }

        if($charge && $charge->status == 'succeeded'){
        	$this->model = new Plan();
          $this->updateDB($updateData);
          return $this->response();
        }else{
          return response()->json(array(
            'data'  => false,
            'error' => 'Unable to charge',
            'timestamps'  => Carbon::now()
          ));
        }

      }else if($paymentType == 'express' && $paymentPayload == 'paypal'){
        $payerInfo = $paymentPayloadValue['payer']['payer_info'];
        $paypal = new PaypalTransaction();
        $paypal->account_id = $accountId;
        $paypal->paypal = $paymentPayloadValue['id'];
        $paypal->cart = $paymentPayloadValue['cart'];
        $paypal->email = $payerInfo['email'];
        $paypal->first_name = $payerInfo['first_name'];
        $paypal->middle_name = $payerInfo['middle_name'];
        $paypal->last_name = $payerInfo['last_name'];
        $paypal->payer = $payerInfo['payer_id'];
        $paypal->total = $total;
        $paypal->currency = 'PHP';
        $paypal->save();

        if($paypal->id){
        	$updateData['payment_payload_value'] = $paypal->id;
        	$this->model = new Plan();
          $this->updateDB($updateData);
          return $this->response();
        }else{
          return response()->json(array(
            'data'  => false,
            'error' => 'Unable to charge',
            'timestamps'  => Carbon::now()
          ));
        }
      }else{
          return response()->json(array(
            'data'  => false,
            'error' => 'Unable to charge',
            'timestamps'  => Carbon::now()
          ));
      }
    }

    public function getOrderNumber(){
    	$result = Plan::select('*')->count();
    	if($result){
        if($result >= 1000){
          return 'IDFO-'.($result + 1);
        }else if($result >= 100){
          return 'IDFO-0'.($result + 1);
        }else if($result >= 10){
          return 'IDFO-00'.($result + 1);
        }else if($result >= 0){
          return 'IDFO-000'.($result + 1);
        }
      }else{
        return 'IDFO-0001';
      }
    }
}