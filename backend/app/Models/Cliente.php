<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome', 'cpf', 'telefone', 'ativo',
    ];

    protected $guarded = ['id', 'created_at', 'update_at'];

    protected $table = 'clientes';

    const ATIVO = 1;
    const INATIVO = 0;
}
