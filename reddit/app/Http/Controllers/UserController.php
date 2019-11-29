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

    public function users($id)
    {

        $me = $id;
        //$me2 = 'radijak';
        //$me3 = 'Bitcoin';

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
        //var_dump($response);

        return view('info', ['ident' => $response['data']['id'],'usuario' => $response['data']['name'],'elkarma' => $response['data']['comment_karma']]);
    }

    public function data($name)
    {
        $me = $name;
        //$me2 = 'radijak';
        //$me3 = 'Bitcoin';
        // BalthazarBulldozer - nothing_to_feel_here

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

        $curl2 = curl_init($url);
        curl_setopt($curl2, CURLOPT_HTTPHEADER, array('Authorization: Basic ' . base64_encode($clientId . ':' . $clientSecret) ));
        curl_setopt($curl2,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl2,CURLOPT_USERAGENT, $userAgent);
        curl_setopt($curl2,CURLOPT_POST, 1);
        curl_setopt($curl2,CURLOPT_POSTFIELDS, $field_string);

        $response2 = curl_exec($curl2);
        $err2 = curl_error($curl2);
        curl_close($curl2);

        $response2 = json_decode($response2, true);
        //var_dump($response); // access_token should be here

        // now get the data
        $curl2 = curl_init('https://oauth.reddit.com/user/'.$me.'/about');
        curl_setopt( $curl2, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response2['access_token'] ) );
        curl_setopt($curl2,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl2,CURLOPT_USERAGENT, $userAgent);

        $response2 = curl_exec($curl2);
        $err2 = curl_error($curl2);
        curl_close($curl2);

        $response2 = json_decode($response2, true);
        //var_dump($response2);
        
        //Karma of User
        $kma = $response2['data']['comment_karma'];

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

        // now get the data & Authentication
        $curl = curl_init('https://oauth.reddit.com/user/'.$me.'/overview');
        curl_setopt( $curl, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response['access_token'] ) );
        curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl,CURLOPT_USERAGENT, $userAgent);

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        $response = json_decode($response, true);
        //var_dump($response);
        //The last 5 posts
        $p1 = $response['data']['children']['0']['data']['link_title'];
        $p2 = $response['data']['children']['1']['data']['link_title'];
        $p3 = $response['data']['children']['2']['data']['link_title'];
        $p4 = $response['data']['children']['3']['data']['link_title'];
        $p5 = $response['data']['children']['4']['data']['link_title'];

        //comments last 5 posts & author
        $author = $response['data']['children']['0']['data']['author'];
        $c1 = $response['data']['children']['0']['data']['num_comments'];
        $c2 = $response['data']['children']['1']['data']['num_comments'];
        $c3 = $response['data']['children']['2']['data']['num_comments'];
        $c4 = $response['data']['children']['3']['data']['num_comments'];
        $c5 = $response['data']['children']['4']['data']['num_comments'];

        $sumpost = $c1+$c2+$c3+$c4+$c5;

        //Votes of the last 5 posts
        $up1 = $response['data']['children']['0']['data']['ups'];
        $up2 = $response['data']['children']['1']['data']['ups'];
        $up3 = $response['data']['children']['2']['data']['ups'];
        $up4 = $response['data']['children']['3']['data']['ups'];
        $up5 = $response['data']['children']['4']['data']['ups'];

        return view('info2',['author' => $author, 'p1' => $p1, 'p2' => $p2, 'p3' => $p3, 'p4' => $p4, 'p5' => $p5, 
                            'c1' => $c1, 'c2' => $c2, 'c3' => $c3, 'c4' => $c4, 'c5' => $c5, 'kma' => $kma,
                            'up1' => $up1, 'up2' => $up2, 'up3' => $up3, 'up4' => $up4, 'up5' => $up5,
                            'sumpost' => $sumpost]);
    
    }

    

    public function dataJson($name)
    {
        
        $me = $name;

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

        $curl2 = curl_init($url);
        curl_setopt($curl2, CURLOPT_HTTPHEADER, array('Authorization: Basic ' . base64_encode($clientId . ':' . $clientSecret) ));
        curl_setopt($curl2,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl2,CURLOPT_USERAGENT, $userAgent);
        curl_setopt($curl2,CURLOPT_POST, 1);
        curl_setopt($curl2,CURLOPT_POSTFIELDS, $field_string);

        $response2 = curl_exec($curl2);
        $err2 = curl_error($curl2);
        curl_close($curl2);

        $response2 = json_decode($response2, true);
        //var_dump($response); // access_token should be here

        // now get the data
        $curl2 = curl_init('https://oauth.reddit.com/user/'.$me.'/about');
        curl_setopt( $curl2, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response2['access_token'] ) );
        curl_setopt($curl2,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl2,CURLOPT_USERAGENT, $userAgent);

        $response2 = curl_exec($curl2);
        $err2 = curl_error($curl2);
        curl_close($curl2);

        $response2 = json_decode($response2, true);

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

        // now get the data & Authentication
        $curl = curl_init('https://oauth.reddit.com/user/'.$me.'/overview');
        curl_setopt( $curl, CURLOPT_HTTPHEADER, array('Authorization: bearer ' . $response['access_token'] ) );
        curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl,CURLOPT_USERAGENT, $userAgent);

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        $response = json_decode($response, true);
        //var_dump($response);

        $p1 = $response['data']['dist'];

        $post1 = strval($p1);

        //$allpost[] = array('p1' => $p1, 'p2' => $p2, 'p3' => $p3, 'p4' => $p4, 'p5' => $p5);

        $ident = $response2['data']['id'];

        $fullname = $response['data']['children']['0']['data']['author_fullname'];

        $author = $response['data']['children']['0']['data']['author'];

        $datos[] = array('followers'=> '0', 'fullname' => $fullname, 'ID' => $ident, 'post' => $post1, 'username' => $author);

        $json_string = json_encode($datos);
        echo $json_string;

    }
}
