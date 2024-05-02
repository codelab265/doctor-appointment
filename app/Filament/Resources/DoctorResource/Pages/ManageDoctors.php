<?php

namespace App\Filament\Resources\DoctorResource\Pages;

use App\Filament\Resources\DoctorResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;
use Illuminate\Database\Eloquent\Model;

class ManageDoctors extends ManageRecords
{
    protected static string $resource = DoctorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()
                ->slideOver()
                ->using(function ($data, $model) {
                    $user = $model::create([
                        'name' => $data['name'],
                        'email' => $data['email'],
                        'password' => $data['password'],
                        'role' => 'doctor',
                        'email_verified_at' => now(),
                    ]);

                    return $user->doctorDetail()->create([
                        'category_id' => $data['category_id'],
                        'about' => $data['about'],
                        'address' => $data['address'],
                        'experience' => $data['experience'],
                        'phone' => $data['phone'],
                        'image' => $data['image'],
                        'start_time' => $data['start_time'],
                        'end_time' => $data['end_time'],
                    ]);
                }),
        ];
    }
}
