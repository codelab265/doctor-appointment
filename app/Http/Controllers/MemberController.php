<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberController extends Controller
{
    //
    public function index()
    {
        $bookingsCount = Booking::query()->where('user_id', auth()->user()->id)->count();

        $recentBookings = Booking::query()->where('user_id', auth()->user()->id)->with('user')->latest()->limit(5)->get();


        return Inertia::render('Member/Dashboard', compact('bookingsCount', 'recentBookings'));
    }

    public  function bookings()
    {

        $bookings = Booking::query()->where('user_id', auth()->user()->id)->with('doctor')->get();

        return Inertia::render('Member/Bookings', compact('bookings'));
    }
}
