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

    public function sellerDashboard()
    {
        return Inertia::render('Admin/SellerDashboard');
    }

    public function sellerDataBuyer()
    {
        return Inertia::render('Admin/SellerDataBuyer');
    }

    public function sellerDataSeller()
    {
        return Inertia::render('Admin/SellerDataSeller');
    }

    public function sellerEcodu()
    {
        return Inertia::render('Admin/SellerEcodu');
    }

    public function sellerLogout()
    {
        return Inertia::render('Admin/SellerLogout');
    }

    public function sellerManage()
    {
        return Inertia::render('Admin/SellerManage');
    }

    public function sellerManageHarga()
    {
        return Inertia::render('Admin/SellerManageHarga');
    }
}
