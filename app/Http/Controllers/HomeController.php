<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\DoctorDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $Categories = Category::all();
        $Doctors = DoctorDetail::query()->with('doctor', 'category')->get();

        return Inertia::render('Home', ['Categories' => $Categories, 'Doctors' => $Doctors]);
    }

    public function search($category)
    {
        $Category = Category::find($category);
        $Categories = Category::all();
        $Doctors = DoctorDetail::where('category_id', $category)->with('doctor', 'category')->get();
        return Inertia::render('Search', ['Category' => $Category, 'Categories' => $Categories, 'Doctors' => $Doctors]);
    }

    public function doctorDetails($id)
    {
        $Doctor = DoctorDetail::query()->where('user_id', $id)->with('doctor', 'category')->first();
        $suggestions = DoctorDetail::query()->whereNot('user_id', $id)->with('doctor', 'category')->get();

        return Inertia::render('DoctorDetails', ['Doctor' => $Doctor, 'Suggestions' => $suggestions]);
    }
}
