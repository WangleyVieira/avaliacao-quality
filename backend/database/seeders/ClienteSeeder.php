<?php

namespace Database\Seeders;

use App\Models\Cliente;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clientes')->insert([
            [
                'id' => 1,
                'nome' => 'beltrano',
                'cpf' => '11111111111',
                'telefone' => '67999145855',
                'ativo' => Cliente::ATIVO,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'id' => 2,
                'nome' => 'ciclano',
                'cpf' => '22222222222',
                'telefone' => '67999145853',
                'ativo' => Cliente::ATIVO,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
