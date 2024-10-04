<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClienteResource;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ClienteControllerApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $clientes = Cliente::where('ativo', Cliente::ATIVO)->get();

            return response()->json([
                'message' => 'Lista de clientes recuperada com sucesso.',
                'data' => ClienteResource::collection($clientes)
            ], 200);
        }
        catch (\Exception $e) {
            Log::error("Erro ao listar clientes: {$e->getMessage()}");
            return response()->json([
                'message' => 'Erro ao recuperar a lista de clientes.',
                'error' => $e->getMessage()
            ], 500);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Cliente::create([
                'nome' => $request->nome,
                'cpf' => $request->cpf,
                'telefone' => $request->telefone,
            ]);

            return response()->json([
                'message' => 'Cadastro realizado com sucesso.',
            ]);
        }
        catch (\Exception $e) {
            Log::error("Erro ao salvar o cliente: {$e->getMessage()}");
            return response()->json([
                'message' => 'Erro ao salvar o cliente.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $cliente = Cliente::where('id', $id)->where('ativo', Cliente::ATIVO)->first();

            return response()->json([
                'message' => 'Cliente recuperado com sucesso.',
                'dados' => new ClienteResource($cliente)
            ]);
        }
        catch (\Exception $e) {
            Log::error("Erro ao exibir o cliente: {$e->getMessage()}");
            return response()->json([
                'message' => 'Erro ao recuperar o cliente.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
