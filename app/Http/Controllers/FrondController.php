<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Http\Response;
use App\Category;

class FrondController extends Controller
{
    public function index(){
        $data=Post::with('category','author')->latest()->get();
        return response()
            ->json(['data'=>$data,'status'=>200],Response::HTTP_OK);
    }

    public function show($id){
        $post=Post::with('category','author')->whereId($id)->first();
        return response()
        ->json(['data'=>$post,'status'=>200],Response::HTTP_OK);
    }

    public function category(){
        
        $data=Category::with('posts')->latest()->get();
        return response()
        ->json(['data'=>$data,'status'=>200],Response::HTTP_OK);
    }


    public function post(){
        $post=Post::latest()->take(4)->get();
        return response()
        ->json(['data'=>$post,'status'=>200],Response::HTTP_OK);
    }

    public function category_post($id){
        $post=Post::with('category','author')->where('category_id',$id)->get();
        return response()
        ->json(['data'=>$post,'status'=>200],Response::HTTP_OK);
    }

    public function search($keyword){
       
        $post=Post::with('category','author')->where('title',"LIKE","%$keyword%")
        ->orWhere('description',"LIKE","%$keyword%")->get();
        return response()
        ->json(['data'=>$post,'status'=>200],Response::HTTP_OK);
        
       
    }
}
