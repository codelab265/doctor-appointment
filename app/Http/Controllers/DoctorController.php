<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function index()
    {
        $reviewsCount = Review::query()->where('doctor_id', auth()->user()->id)->count();
        $bookingsCount = Booking::query()->where('doctor_id', auth()->user()->id)->count();

        $recentBookings = Booking::query()->where('doctor_id', auth()->user()->id)->with('user')->latest()->limit(5)->get();


        return Inertia::render('Doctor/Dashboard', compact('reviewsCount', 'bookingsCount', 'recentBookings'));
    }

    public function UpdateBooking(Request $request)
    {

        $request->validate([
            'status' => 'required'
        ]);

        $booking = Booking::query()->where('doctor_id', auth()->user()->id)->where('id', $request->booking_id)->first();
        $booking->status = $request->status;
        $booking->save();
    }

    public  function bookings()
    {

        $bookings = Booking::query()->where('doctor_id', auth()->user()->id)->with('user')->get();

        return Inertia::render('Doctor/Bookings', compact('bookings'));
    }

    public function reviews()
    {
        $reviews = Review::query()->where('doctor_id', auth()->user()->id)->with('user')->get();
        return Inertia::render('Doctor/Reviews', compact('reviews'));
    }
}
