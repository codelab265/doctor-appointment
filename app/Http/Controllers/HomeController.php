<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $Categories = Category::all();
        $Doctors = User::where('is_admin', false)->where('role', 'doctor')->with('doctorDetail')->get();

        return Inertia::render('Home', ['Categories' => $Categories, 'Doctors' => $Doctors]);
    }
}
