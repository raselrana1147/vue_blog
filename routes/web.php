<?php

use Illuminate\Support\Facades\Route;

Route::get('/',function(){
    return view("app");
});

Route::get('admin/{any?}', function () {
    return view('admin');
})->where('any','.*');


// Route::get('admin/login/', function () {
//     return view('login');
// });


