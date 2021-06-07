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

Route::get('/', function () {
    return view('home');
});

Route::get('/form', function () {
    return view('form');
});

Route::get('/dashboard/get-num-new-orders/', 'App\Http\Controllers\DatabaseController@getNumOfJobs');
Route::get('/dashboard/getallJobs/', 'App\Http\Controllers\DatabaseController@getAllJobs');
Route::get('/dashboard/getCostCentre/{job}', 'App\Http\Controllers\DatabaseController@getCostCentre');
