<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Hash;
use Exception;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Create a User
     * @param  Request $request
     * @return [type]
     */
    public function register(Request $request) {
        $reposne = ['result' => false];

        $input = $request->all();

        //validate the input
        $validator = Validator::make($input, User::$validationRules['signup']);
        if ($validator->fails()) {
            $reposne['error'] = $validator->errors();
        } else {
            $input['password'] = Hash::make($input['password']);
            try {
                $user = User::create($input);

                // Get the token
                $token = auth()->login($user);

                $reposne = [
                    'result' => true,
                    'user' => $user,
                    'token' => [
                        'access_token' => $token,
                        'token_type' => 'bearer',
                        'expires_in' => auth()->factory()->getTTL() * 60
                    ]
                ];
            } catch (Exception $e) {
                $reposne['error'] = 'Something Went Wrong!!';
            }
        }

        return response()->json($reposne);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login() {
        $reposne = ['result' => false];
        $credentials = request(['email', 'password']);

        //validate the input
        $validator = Validator::make($credentials, User::$validationRules['login']);
        if ($validator->fails()) {
            $reposne['error'] = $validator->errors();
        } else {
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            } else {
                $reposne = [
                    'result' => true,
                    'token' => [
                        'access_token' => $token,
                        'token_type' => 'bearer',
                        'expires_in' => auth()->factory()->getTTL() * 60
                    ]
                ];
            }
        }

        return response()->json($reposne);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {
        $reposne = ['result' => false];
        $user = auth()->user();

        if ($user) {
            $reposne['result'] = true;
            $reposne['user'] = $user;
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($reposne);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();

        return response()->json(['result' => true, 'message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        $reposne = ['result' => false];
        $token = auth()->refresh();

        if ($token) {
            $reposne = [
                'result' => true,
                'token' => [
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'expires_in' => auth()->factory()->getTTL() * 60
                ]
            ];
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($reposne);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token) {
        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
