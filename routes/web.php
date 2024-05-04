<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('landing-page');

Route::get('/dashboard', function () {
    return Inertia::render('User/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/catalog', function () {
    return Inertia::render('User/Catalog');
})->middleware(['auth', 'verified'])->name('user-catalog');

Route::get('/ecopost', function () {
    return Inertia::render('User/EcopostTambah');
})->middleware(['auth', 'verified'])->name('ecopost');

Route::get('/ecodu', function () {
    return Inertia::render('User/Ecodu');
})->middleware(['auth', 'verified'])->name('ecodu');

Route::get('/ecoduproductorganic', function () {
    return Inertia::render('User/EcoduProductOrganic');
})->middleware(['auth', 'verified'])->name('ecoduproductorganic');

Route::get('/ecoduproductanorganic', function () {
    return Inertia::render('User/EcoduProductAnorganic');
})->middleware(['auth', 'verified'])->name('ecoduproductanorganic');

Route::get('/ecodule', function () {
    return Inertia::render('User/Ecodule');
})->middleware(['auth', 'verified'])->name('ecodule');

Route::get('/ecochat', function () {
    return Inertia::render('User/Ecochat');
})->middleware(['auth', 'verified'])->name('ecochat');


Route::get('/dashboardseller', function () {
    return Inertia::render('DashboardSeller');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/landingpage', function () {
//     return Inertia::render('landingpage');
// });

// pemdaftaran seller
Route::get('/seller/register', function () {
    return Inertia::render('Seller/Auth/RegisterSeller');
})->middleware(['auth', 'verified'])->name('');


Route::get('/seller/sellerpage', function () {
    return Inertia::render('SellerPage');
});

Route::get('/seller/productmaps', function () {
    return Inertia::render('ProductMaps');
});

Route::get('/seller/catalog', function () {
    return Inertia::render('seller/SellerCatalog');
})->middleware(['auth', 'verified'])->name('seller-catalog');

Route::get('/seller/dashboard', function () {
    return Inertia::render('Seller/SellerDashboard');
})->middleware(['auth', 'verified'])->name('seller-dashboard');

Route::get('/seller/catalog', function () {
    return Inertia::render('Seller/SellerCatalog');
})->middleware(['auth', 'verified'])->name('seller-catalog');

Route::get('/seller/tambah', function () {
    return Inertia::render('Seller/SellerTambah');
})->middleware(['auth', 'verified'])->name('seller-tambah');

Route::get('/seller/notifikasi', function () {
    return Inertia::render('Seller/SellerNotifikasi');
})->middleware(['auth', 'verified'])->name('seller-notifikasi');

Route::get('/seller/daftar', function () {
    return Inertia::render('Seller/SellerDaftar');
})->middleware(['auth', 'verified'])->name('seller-daftar');

// Route::get('/catalog', function () {
//     return Inertia::render('Catalog');
// });
Route::get('/sellerpengiriman', function () {
    return Inertia::render('Seller/SellerPengiriman');
});

Route::get('/sellerulasan', function () {
    return Inertia::render('Seller/SellerUlasan');
});

Route::get('/sellersetting', function () {
    return Inertia::render('Seller/SellerSetting');
});

// Admin

require __DIR__ . '/auth.php';


Route::get('/admin/dashboard', [HomeController::class, 'dashboard'])->middleware(['auth', 'admin'])->name('admin.dashboard');

Route::get('/admin/sellerdashboard', [HomeController::class, 'SellerDashboard'])->middleware(['auth', 'admin'])->name('admin.sellerdashboard');

Route::get('/admin/sellerdatabuyer', [HomeController::class, 'SellerDataBuyer'])->middleware(['auth', 'admin'])->name('admin.sellerdatabuyer');

Route::get('/admin/sellerdataseller', [HomeController::class, 'SellerDataSeller'])->middleware(['auth', 'admin'])->name('admin.sellerdataseller');

Route::get('/admin/sellerecodu', [HomeController::class, 'SellerEcodu'])->middleware(['auth', 'admin'])->name('admin.sellerecodu');

Route::get('/admin/sellerlogout', [HomeController::class, 'SellerLogout'])->middleware(['auth', 'admin'])->name('admin.sellerlogout');

Route::get('/admin/sellermanage', [HomeController::class, 'SellerManage'])->middleware(['auth', 'admin'])->name('admin.sellermanage');

Route::get('/admin/sellermanageharga', [HomeController::class, 'SellerManageHarga'])->middleware(['auth', 'admin'])->name('admin.sellermanageharga');
