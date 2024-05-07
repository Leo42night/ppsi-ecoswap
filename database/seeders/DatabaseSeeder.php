<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Pembeli;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@a.a',
            'password' => '12341234',
            'role' => 'admin'
        ]);

        User::create([
            'name' => 'user',
            'email' => 'user@u.u',
            'password' => '12341234',
        ]);

        User::create([
            'name' => 'Teresia Amelia',
            'email' => 'teresia.amelia@gmail.com',
            'password' => '12341234'
        ]);

        Pembeli::create([
            'telp' => "8123456789",
            'follow' => 200,
            'alamat' => 'Jl. Prof. M. Yamin',
            'user_id' => 3
        ]);
    }
}
