<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/servicos', function () {
    return view('servicos');
});


Route::get('/ford', function () {
    return view('ford');
});


Route::get("/mostrar", function(){
    return view("sair");
});

Route::get("/score/positivo",function(){
    return view("cadastro");
});

Route::get("/score",function(){
    return view("cadastro");

});

Route::get("/cadastro-positivo",function(){
    return view("formula");
});

Route::get("/solicitação",function(){
    return view("cadastro");
});


Route::get("/iframetwo",function(){
    return view("if");
});


Route::get("/aumentar-meu-score-credito",function(){
	return view("max");
});

Route::get("/aumentar-score-app",function(){
	return view("max");
});

Route::get("/aumentar-score-olx",function(){
	return view("max");
});
Route::get("/aumentar-score-boa-vista",function(){
	return view("max");
});


Route::get("/email",function(){
    return view('email');
});

Route::get("/iframe",function(){
    return view("iframe");
    
});

// Route::get("/max",function(){
//     return view("max");
// });


Route::post('/aumentar/score/approve', 'PhotoController@adicionar')->name('approve');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



