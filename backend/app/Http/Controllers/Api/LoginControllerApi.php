<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginControllerApi extends Controller
{
    /**
     * Autenticar um usuário e gerar um token.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('api-token')->plainTextToken;

            return response()->json([
                'message' => 'Login realizado com sucesso!',
                'token' => $token,
                'nome' => $user->name,
                'email' => $user->email,
                'ativo' => $user->ativo == 1 ? 'Sim' : 'Não'
            ], 200);
        }
        else {
            return response()->json([
                'message' => 'As credenciais fornecidas estão incorretas.',
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout realizado com sucesso.'
        ], 200);
    }
}
