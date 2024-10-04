<?php

use App\Http\Controllers\Api\ClienteControllerApi;
use App\Http\Controllers\Api\LoginControllerApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [LoginControllerApi::class, 'login'])->name('api.login');
Route::post('/logout', [LoginControllerApi::class, 'logout'])->middleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum'], function() {

    Route::group(['prefix' => '/cliente', 'as' => 'cliente.'], function() {
        Route::get('/index', [ClienteControllerApi::class, 'index'])->name('api.index');
        Route::get('/show/{id}', [ClienteControllerApi::class, 'show'])->name('api.show');
        Route::post('/store', [ClienteControllerApi::class, 'store'])->name('api.store');
    });


});
