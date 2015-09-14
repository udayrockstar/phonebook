<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('single');
});

Route::post('/auth/register','Auth\AuthController@register');
// Route::post('/auth/login', array('before' => 'csrf_json', 'uses' => 'AuthController@login'));
Route::post('/auth/login', 'Auth\AuthController@login');
