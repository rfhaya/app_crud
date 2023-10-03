<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    function addArticle(Request $req) {
        
        $article = new Article;

        $article->date = date('Y-m-d H:i:s');
        $article->title = $req->input('title');
        $article->content = $req->input('content');

        $article->save();

        return $req->input();
    }

    function listArticle() {
        return Article::all();
    }

    function delete($id) {
        $result = Article::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Artikel Dihapus"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function getArticle($id) {
        return Article::find($id);
    }

    function updateArticle($id, Request $req) {

         $article = Article::find($id);

        $article->date = date('Y-m-d H:i:s');
        $article->title = $req->input('title');
        $article->content = $req->input('content');

        $article->save();

        return $req->input();
    }

    public function search($key)
    {
        return Article::where('title','Like',"%$key%")->get();
    }
}
