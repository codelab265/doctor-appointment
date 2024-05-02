<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageUsers extends ManageRecords
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()
                ->using(function ($data, $model) {
                    dd($data);
                    /* $data['is_admin'] = true;
                    $data['role'] = "doctor";
                    return $model::create($data); */
                }),
        ];
    }
}