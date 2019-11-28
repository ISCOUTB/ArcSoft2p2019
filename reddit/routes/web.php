<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/lumen', function () use ($router) {
    return $router->app->version();
});

$router->get('/', ['uses' => 'UserController@index']);

$router->get('/user/{id}', ['uses' => 'UserController@users']);

$router->get('/datauser/{name}', ['uses' => 'UserController@data']);

$router->get('/userjson/{name}', ['uses' => 'UserController@dataJson']);


