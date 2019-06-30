@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading"><h1>Creditando Score </h1> <br></div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nome</th>
                          <th>E-mail</th>
                          <th>CPF</th>
                          <th>Telefone<th>
                       
                        </tr>
                      </thead>
                      <tbody>
                      @foreach ($clientes as $cliente)
                        <tr>
                          <th>{{$cliente->id}}</th>
                          <td>{{$cliente->nome}} {{$cliente->sobrenome}}</td>
                          <td>{{$cliente->email}} </td>
                          <td>{{$cliente->cpf}} </td>
                          <td>{{$cliente->telefone}} </td>
                          <td></td>
                        </tr>
                    @endforeach
                      
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
