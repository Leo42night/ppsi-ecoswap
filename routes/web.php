<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
require __DIR__ . '/auth.php';

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('landing-page');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route untuk User
Route::group(['prefix'=>'user', 'middleware'=>['auth','verified']], function(){
    Route::get('/', fn()=> Inertia::render('User/Catalog'));
    Route::get('dashboard', fn()=> Inertia::render('User/Catalog'))->name('dashboard');
    Route::get('ecodu', fn()=> Inertia::render('User/Ecodu'))->name('ecodu');
    
    // detail produk. masih statis dengan 2 halaman utk kasus organik dan anorganik
    Route::get('detail-produk/organik', fn()=> Inertia::render('User/DetailProductOrganic'))->name('detail-produk-organic');
    Route::get('detail-produk/anorganik', fn()=> Inertia::render('User/DetailProductAnorganic'))->name('detail-produk-anorganic');

    Route::get('produk-maps', fn()=> Inertia::render('User/ProductMaps'))->name('product-maps');
});

// Routeer untuk Seller
Route::group(['prefix'=>'seller', 'middleware'=>['auth','verified'], 'as'=>'seller.'], function(){
    Route::get('register', fn()=> Inertia::render('Seller/Auth/RegisterSeller'))->name('register');
    Route::get('catalog', fn()=> Inertia::render('Seller/SellerCatalog'))->name('catalog');
    Route::get('notifikasi', fn()=> Inertia::render('Seller/SellerNotifikasi'))->name('notifikasi');
    Route::get('/', fn()=> Inertia::render('Seller/SellerDashboard'));

    Route::get('dashboard', fn()=> Inertia::render('Seller/SellerDashboard'))->name('dashboard');
    Route::get('tambah', fn()=> Inertia::render('Seller/SellerTambah'))->name('tambah');
    Route::get('daftar', fn()=> Inertia::render('Seller/SellerDaftar'))->name('daftar');
    Route::get('pengiriman', fn()=> Inertia::render('Seller/SellerPengiriman'))->name('pengiriman');
    Route::get('ecochat', fn()=> Inertia::render('Seller/Ecochat'))->name('ecochat');
    // Route::get('ecoroom', fn()=> Inertia::render('Seller/SellerEcochat'))->name('ecoroom');
    Route::get('ulasan', fn()=> Inertia::render('Seller/SellerUlasan'))->name('ulasan');
    Route::get('setting', fn()=> Inertia::render('Seller/SellerSetting'))->name('setting');
});

// Halaman Admin leo Rapikan, jadi jika mau memasukkan halaman baru tinggal tambahkan Route::get(...)
// prefix admin berarti url admin/, contoh akses url dashboard jadi admin/dashboard
Route::group(['prefix'=>'admin', 'middleware'=>['auth','admin'], 'as'=>'admin.'], function(){
    Route::get('dashboard', fn()=> Inertia::render('Admin/Dashboard'))->name('dashboard');
    Route::get('kelola-akun', fn()=> Inertia::render('Admin/KelolaAkun'))->name('kelola-akun');
    Route::patch('kelola-akun', [AdminController::class, 'update'])->name('update'); //perubahan akun admin
    Route::get('data-pembeli', fn()=> Inertia::render('Admin/DataPembeli'))->name('data-pembeli');
    Route::get('data-penjual', fn()=> Inertia::render('Admin/DataPenjual'))->name('data-penjual');
    Route::get('kelola-ecodu', fn()=> Inertia::render('Admin/KelolaEcodu'))->name('kelola-ecodu');
    Route::get('kelola-harga', fn()=> Inertia::render('Admin/KelolaHarga'))->name('kelola-harga');
});

//halaman testing
Route::get('test', fn()=> Inertia::render(''));