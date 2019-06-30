<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Creditandoscore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        

        if (!Schema::hasTable('clientes')) {
           Schema::create('clientes', function (Blueprint $table) {
                $table->increments('id');
                $table->string('nome');
                $table->string('sobrenome');
                $table->string('cpf')->unique();
                $table->string('email')->unique();
                $table->string('telefone')->unique();
                $table->timestamps();
            });
        }

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
