<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PhotoController extends Controller
{
    public function adicionar(Request $request)
    
    {

       
        $firstName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $personalNumber = $request->input('personalNumber');
        $email = $request->input('email');
        $telephoneNumber = $request->input('telephoneNumber');
       


        try
        {
            DB::insert('insert into clientes (nome, sobrenome, cpf, email, telefone) values(?,?,?,?,?)', array($firstName, $lastName, $personalNumber, $email, $telephoneNumber));

        }
            //catch specific exception....
        catch(\Exception $e) {
            echo "ERROR";
        }

        return redirect('/')->withInput();
    }
}
