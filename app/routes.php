<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/api/inbox', array('uses' => 'EmailController@getByUser'));
Route::post('/api/inbox', array('uses' => 'EmailController@sendMessage'));
Route::get('/api/inbox/{emailId}', array('uses' => 'EmailController@getById'));
Route::get('/api/inbox/updates/{lastEmailId}', array('uses' => 'EmailController@getUpdates'));

Route::post('/api/login', array('uses' => 'UserController@login'));
Route::post('/api/logout', array('uses' => 'UserController@logout'));

