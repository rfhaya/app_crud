<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('addArticle', [ArticleController::class, 'addArticle']);
Route::get('listArticle', [ArticleController::class, 'listArticle']);
Route::delete('delete/{id}', [ArticleController::class, 'delete']);
Route::get('EditArticle/{id}', [ArticleController::class, 'getArticle']);
Route::put('updateArticle/{id}', [ArticleController::class, 'updateArticle']);
Route::get('/search/{key}/', [ArticleController::class, 'search']);