<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use vendor\illuminate\http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        return view('index', ['name' => 'Reddit']);
    }

    public function mostrar(Request $request)
    {
        return view('info')
                     ->with('nombre', $request->nombre);
    }

    public function users()
    {
        //$nombre = Input::get('nombre');
        //echo 'su nombre es: '.$nombre;

        $me = 'Hei_San';

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
        $curl = curl_init('https://oauth.reddit.com/user/'.$me.'/about');
        curl_setopt( $curl, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response['access_token'] ) );
        curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl,CURLOPT_USERAGENT, $userAgent);

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        $response = json_decode($response, true);
        //echo('Id: '.$response['data']['id'].' - Username: '.$response['data']['name'].' - Karma: '.$response['data']['comment_karma']); // data should be here

        return view('info', ['ident' => $response['data']['id'],'usuario' => $response['data']['name'],'elkarma' => $response['data']['comment_karma']]);
    }

    //
}
