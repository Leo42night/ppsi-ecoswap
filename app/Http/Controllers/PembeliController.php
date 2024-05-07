<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePembeliRequest;
use App\Http\Requests\UpdatePembeliRequest;
use App\Models\Pembeli;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PembeliController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pembeli = DB::table('users')
                    ->join('pembelis','users.id','=','pembelis.user_id')
                    ->select('users.*', 'pembelis.*')
                    ->get();
        return Inertia::render('Admin/DataPembeli', [
            'users' => $pembeli
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePembeliRequest $request)
    {
        $validateData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required'
        ]);

        $user = new User();
        // return dd($user);
        $user->id;
        $user->name = $validateData['name'];
        $user->email = $validateData['email'];
        $user->password = $validateData['password'];
        
        $user->save();
        $user_id =  DB::table('users')->where('name', $user->name)->value('id');

        // dd($user);
        Pembeli::create([
            'user_id' => $user_id
        ]);

        return redirect()->route('admin.data-pembeli')->with('berhasil','data pembeli baru berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembeli $pembeli)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembeli $pembeli)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePembeliRequest $request, Pembeli $pembeli)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembeli $pembeli)
    {
        //
    }
}
