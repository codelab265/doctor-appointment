<?php

use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/search/{category}', [HomeController::class, 'search'])->name('search');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/details/{id}', [HomeController::class, 'doctorDetails'])->name('doctor.details');
    Route::post('doctor/review/store', [HomeController::class, 'storeReview'])->name('doctor.review.store');
    Route::post('doctor/booking/store', [HomeController::class, 'storeBooking'])->name('doctor.booking.store');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => 'auth', 'prefix' => 'doctor', 'as' => 'doctor.'], function () {
    Route::get('dashboard', [DoctorController::class, 'index'])->name('dashboard');
    Route::get('bookings', [DoctorController::class, 'bookings'])->name('bookings');
    Route::post('booking/update', [DoctorController::class, 'updateBooking'])->name('booking.update');

    Route::get('reviews', [DoctorController::class, 'reviews'])->name('reviews');
});

require __DIR__ . '/auth.php';
