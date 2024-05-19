<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Category;
use App\Models\DoctorDetail;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $Categories = Category::all();
        $Doctors = DoctorDetail::query()->with('doctor', 'category')->get()->map(function ($doctor) {
            $doctor['averageRating'] = Review::query()->where('doctor_id', $doctor->user_id)->avg('rating');
            return $doctor;
        });
        return Inertia::render('Home', ['Categories' => $Categories, 'Doctors' => $Doctors]);
    }

    public function search($category)
    {
        $Category = Category::find($category);
        $Categories = Category::all();
        $Doctors = DoctorDetail::where('category_id', $category)->with('doctor', 'category')->get()->map(function ($review) {
            $review['averageRating'] = Review::query()->where('doctor_id', $review['user_id'])->avg('rating');
            return $review;
        });
        return Inertia::render('Search', ['Category' => $Category, 'Categories' => $Categories, 'Doctors' => $Doctors]);
    }

    public function doctorDetails($id)
    {
        $Doctor = DoctorDetail::query()->where('user_id', $id)->with('doctor', 'category')->first();
        $suggestions = DoctorDetail::query()->whereNot('user_id', $id)->with('doctor', 'category')->get()->map(function ($review) {
            $review['averageRating'] = Review::query()->where('doctor_id', $review->user_id)->avg('rating');
            return $review;
        });
        $reviews = Review::where('doctor_id', $id)->with('user')->get();
        $averageRating = Review::query()->where('doctor_id', $id)->avg('rating');

        return Inertia::render('DoctorDetails', ['Doctor' => $Doctor, 'Suggestions' => $suggestions, 'Reviews' => $reviews, 'AverageRating' => $averageRating]);
    }

    public function storeReview(Request $request)
    {

        $request->validate([
            'rating' => 'required',
            'comment' => 'required'
        ]);

        Review::updateOrCreate(
            [
                'doctor_id' => $request->doctor_id,
                'user_id' => auth()->user()->id
            ],
            [
                'doctor_id' => $request->doctor_id,
                'user_id' => auth()->user()->id,
                'rating' => $request->rating,
                'comment' => $request->comment
            ]
        );
    }

    public function storeBooking(Request $request)
    {
        $request->validate([
            'requested_date' => 'required',
            'requested_time' => 'required',
        ]);

        $checkAvailability = Booking::query()->where('doctor_id', $request->doctor_id)->where('user_id', auth()->user()->id)->where('status', 0)->first();

        if ($checkAvailability) {
            return back()->with('error', 'Already Booked');
        }

        Booking::create([
            'doctor_id' => $request->doctor_id,
            'user_id' => auth()->user()->id,
            'requested_date' => date('Y-m-d', strtotime($request->requested_date)),
            'requested_time' => $request->requested_time
        ]);
    }
}
