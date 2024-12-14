<?php

use App\Http\Controllers\Api\InfoStafController;
use App\Http\Middleware\ReactCors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/infoStaf', [InfoStafController::class, 'index']);
Route::get('/infoStaf/{infoStaf}', [InfoStafController::class, 'show']);
Route::post('/infoStaf', [InfoStafController::class, 'store']);
    // ->middleware(ReactCors::class);
Route::put('/infoStaf/{infoStaf}', [InfoStafController::class, 'update']);
Route::delete('/infoStaf/{infoStaf}', [InfoStafController::class, 'destroy']);