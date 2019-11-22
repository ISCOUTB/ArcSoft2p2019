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

$router->get('/', function ()  {
    return view('index', ['name' => 'Reddit']);
});

$router->get('/token', function ()  {
    // reddit username
	$username = 'Hei_San';
	// reddit password
	$password = 'nacional97';
	// client id
	$clientId = 'OrDWl9bHpw0_eA';
	// client secret
	$clientSecret = 'GUcXmPqvvQ5nZuXZnjzNNufvT8o';
	// post params 
	$params = array(
		'grant_type' => 'password',
		'username' => $username,
		'password' => $password
    );
    
    $userAgent = 'sometext:appnamehere v0.1 by usernamehere';

	// curl settings and call to reddit
    $ch = curl_init( 'https://www.reddit.com/api/v1/access_token' );
	curl_setopt( $ch, CURLOPT_USERPWD, $clientId . ':' . $clientSecret );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $params );
	curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, FALSE );
	// curl response from reddit
	$response_raw = curl_exec( $ch );
	$response = json_decode( $response_raw );
	curl_close($ch);
	// display response from reddit
    var_dump($response, true);

    $accessToken = '';
    // type access token
    $accessTokenType = 'bearer';

    $ch = curl_init( 'https://oauth.reddit.com/api/v1/me' );
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: bearer' . $response['access_token'] ) );
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch,CURLOPT_USERAGENT, $userAgent);

    $responseR = curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);

    $response = json_decode($responseR, true);
    var_dump($response); // data should be here*/

    //$headers = array("Authorization"=> $token, "User-Agent"=> "APP-NAME by REDDIT-USERNAME");
    //$responseR = requests.get("https://oauth.reddit.com/api/v1/me", $headers);

    //$me_json = json_decode( $responseR );
    //var_dump( $responseR );
    
});

$router->get('/users', function ()  {
    $url ='https://ssl.reddit.com/api/v1/access_token';
    $clientId = '';
    $clientSecret = '';

    // post variables
    $fields = array (
    	'grant_type' => 'client_credentials'
    );

    $userAgent = 'sometext:appnamehere v0.1 by usernamehere';

    // prepare data for post
    $field_string = http_build_query($fields);

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic ' . base64_encode($clientId . ':' . $clientSecret) ));
    curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl,CURLOPT_USERAGENT, $userAgent);
    curl_setopt($curl,CURLOPT_POST, 1);
    curl_setopt($curl,CURLOPT_POSTFIELDS, $field_string);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    $response = json_decode($response, true);
    //var_dump($response); // access_token should be here

    // now get the data
    $curl = curl_init('https://oauth.reddit.com/user/Hei_San/about');
    curl_setopt( $curl, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response['access_token'] ) );
    curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl,CURLOPT_USERAGENT, $userAgent);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    $response = json_decode($response, true);
    echo('Id: '.$response['data']['id'].' - Username: '.$response['data']['name'].' - Karma: '.$response['data']['comment_karma']); // data should be here

});
