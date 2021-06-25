<?php

use Illuminate\Support\Facades\Route;

use app\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return view('home');
});
Route::get('/login', function () {
    return view('login');
});

Route::get('/form', function () {
    return view('form');
});

Route::get('/dashboard/get-num-new-orders/', 'App\Http\Controllers\DatabaseController@getNumOfJobs');
Route::get('/dashboard/getallJobs/', 'App\Http\Controllers\DatabaseController@getAllJobs');
Route::get('/dashboard/getCostCentre/{job}', 'App\Http\Controllers\DatabaseController@getCostCentre');
Route::post('createNew', 'App\Http\Controllers\DatabaseController@createNew');
Route::get('/api/checkif/{nameid}', 'App\Http\Controllers\DatabaseController@checkif');
Route::get('/api/deleteAll/{nameid}', 'App\Http\Controllers\DatabaseController@deleteAll');
Route::get('/api/getAll/{nameid}', 'App\Http\Controllers\DatabaseController@getAll');
