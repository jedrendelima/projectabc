<?php

namespace Increment\Comment;

use Illuminate\Support\ServiceProvider;

class CommentServiceProvider extends ServiceProvider{

  public function boot(){
    // $this->loadMigrationsFrom(__DIR__.'/migrations');
    $this->loadRoutesFrom(__DIR__.'/routes/web.php');
  }

  public function register(){
  }
}