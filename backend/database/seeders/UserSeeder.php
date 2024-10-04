<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Fulano',
            'email' => 'fulano@gmail.com',
            'password' => Hash::make('123456'),
            'ativo' => User::ATIVO,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
