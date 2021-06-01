<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    

    public function index(){
        $data=Category::latest()->get();
        return response()
            ->json(['data'=>$data,'status'=>200],Response::HTTP_OK);
    }

    public function store(Request $request){

            $this->validate($request,[
                'name'=>'required|unique:categories'
            ]);

            $data=new Category;
            $data->name=$request->name;
            $data->save();
            
            return response()
            ->json(['data'=>'Category created successfully','status'=>200],Response::HTTP_CREATED);

    }

    public function edit($id){
        $category=Category::findOrFail($id);
        return response()
        ->json(['data'=>$category,'status'=>200],Response::HTTP_OK);

    }

    public function update(Request $request, $id){
        $category=Category::findOrFail($id);
        $this->validate($request,[
            'name'=>'required|unique:categories,name,'.$category->id
        ]);

        $category->name=$request->name;
        $category->save();

        return response()
        ->json(['data'=>'Category Updated successfully','status'=>200],Response::HTTP_OK);
        
    }

    public function destroy(Request $request){
       
        $data=Category::findOrFail($request->id);
        $data->delete();
        return response()
        ->json(['data'=>'Category deleted successfully','status'=>200],Response::HTTP_OK);

    }

    public function multiple_category($allId){

         $all_id=explode(',',$allId);
        
        foreach ($all_id as $id) {
               
            $data=Category::find($id);
            $data->delete();
            
         }
    }
}
