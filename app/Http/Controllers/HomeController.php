<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }
    public function SellerDashboard()
    {
        return Inertia::render('Admin/SellerDashboard');
    }
    public function SellerDatabuyer()
    {
        return Inertia::render('Admin/SellerDataBuyer');
    }
    public function SellerDataSeller()
    {
        return Inertia::render('Admin/SellerDataSeller');
    }
    public function SellerEcodu()
    {
        return Inertia::render('Admin/SellerEcodu');
    }
    public function SellerLogout()
    {
        return Inertia::render('Admin/SellerLogout');
    }
    public function SellerManage()
    {
        return Inertia::render('Admin/SellerManage');
    }
    public function SellerManageHarga()
    {
        return Inertia::render('Admin/SellerManageHarga');
    }
}
