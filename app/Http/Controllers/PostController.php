<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Http\Response;
use Image;


class PostController extends Controller
{
    public function index(){
        $data=Post::with('category','author')->latest()->get();
        return response()
            ->json(['data'=>$data,'status'=>200],Response::HTTP_OK);
    }

    public function store(Request $request){

            $this->validate($request,[
                'title'=>'required|unique:posts',
                'category_id'=>'required',
                'description'=>'required',
            ]);

            $data=new Post;
            
            $data->category_id=$request->category_id;
            $data->title=$request->title;
            $data->author_id="1";
            $data->tag=json_encode(explode(' ',$request->title));
            $data->slug=str_replace(' ','-',strtolower($request->title));
            $data->description=$request->description;
         if ($request->image) {

                $pain_text=strpos($request->image,";");
                $sub_string=substr($request->image,0,$pain_text);
                $image_name=time().".".explode('/',$sub_string)[1];
                $upload_path=public_path().'/backend/img/'.$image_name;
                Image::make($request->image)->save($upload_path);

                $data->image=$image_name;
            }

    //     if($request->image){
    //         $image=$request->image;
    //         $image_name = time().'.'.$image->getClientOriginalExtension();
    //         $upload_path=public_path().'/backend/img/'.$image_name;
    //         Image::make($image)->save($upload_path);
    //         $data->image=$image_name;
           
    //    }
            $data->save();
            
            return response()
            ->json(['data'=>'Post created successfully','status'=>200],Response::HTTP_CREATED);

    }

    public function edit($id){
        $post=Post::findOrFail($id);
        return response()
        ->json(['data'=>$post,'status'=>200],Response::HTTP_OK);

    }

    public function update(Request $request, $id){
            $data=Post::find($id);
        $this->validate($request,[
            'title'=>'required|unique:posts,title,'.$data->id,
            'category_id'=>'required',
            'description'=>'required',
        ]);

       
        
        $data->category_id=$request->category_id;
        $data->title=$request->title;
        $data->author_id="1";
        $data->tag=json_encode(explode(' ',$request->title));
        $data->slug=str_replace(' ','-',strtolower($request->title));
        $data->description=$request->description;
     if ($request->image !=$data->image) {

            if (file_exists(public_path()."/backend/img/".$data->image)) {
                unlink(public_path()."/backend/img/".$data->image);
            }
            $pain_text=strpos($request->image,";");
            $sub_string=substr($request->image,0,$pain_text);
            $image_name=time().".".explode('/',$sub_string)[1];
            $upload_path=public_path().'/backend/img/'.$image_name;
            Image::make($request->image)->save($upload_path);

            $data->image=$image_name;

        }else{
            $data->image=$data->image;
        }

        $data->save();
        
        return response()
        ->json(['data'=>'Post created successfully','status'=>200],Response::HTTP_CREATED);
        
    }

    public function destroy(Request $request){
       //return $request->id;
        $data=Post::find($request->id);

        if (file_exists(public_path()."/backend/img/".$data->image)) {
            unlink(public_path()."/backend/img/".$data->image);
        }
        $data->delete();
        return response()
        ->json(['data'=>'Category deleted successfully','status'=>200],Response::HTTP_OK);

    }
}
