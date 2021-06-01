<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('category','CategoryController@index')->name('category.index');
Route::post('category','CategoryController@store')->name('category.store');
Route::get('category/edit/{id}','CategoryController@edit')->name('category.edit');
Route::post('category/update/{id}','CategoryController@update')->name('category.update');
Route::post('delete_category','CategoryController@destroy')->name('category.delete');
Route::get('delete_multiple_category/{categoryId}','CategoryController@multiple_category');


Route::get('post','PostController@index')->name('post.index');
Route::post('post','PostController@store')->name('post.store');
Route::get('post/edit/{id}','PostController@edit')->name('post.edit');
Route::post('post/update/{id}','PostController@update')->name('post.update');
Route::post('post_delete','PostController@destroy')->name('post.destroy');

// frontend controller
Route::get('get_post','FrondController@index');
Route::get('get_single_post/{id}','FrondController@show');
Route::get('get_category','FrondController@category');
Route::get('get_latest_post','FrondController@post');
Route::get('category_post/{id}','FrondController@category_post');
Route::get('get_search_post/{keyword}','FrondController@search');

