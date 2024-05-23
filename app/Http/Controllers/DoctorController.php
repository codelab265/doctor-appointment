<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Diagnosis;
use App\Models\Review;
use App\Models\User;
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

    public function diagnosis()
    {
        $Users = User::query()->where('role', 'user')->get();
        $Diagnosis = Diagnosis::query()->where('doctor_id', auth()->user()->id)->with('user')->get();
        return Inertia::render('Doctor/Diagnosis', compact('Diagnosis', 'Users'));
    }

    public function createDiagnosis(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'diagnosis' => 'required',
            'treatment' => 'required',
            'prescription' => 'required',

        ]);

        $diagnosis = new Diagnosis();
        $diagnosis->doctor_id = auth()->user()->id;
        $diagnosis->user_id = $request->user_id;
        $diagnosis->treatment = $request->treatment;
        $diagnosis->prescription = $request->prescription;
        $diagnosis->diagnosis_date = date('Y-m-d');
        $diagnosis->diagnosis = $request->diagnosis;
        $diagnosis->save();
    }
}
