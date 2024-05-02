<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DoctorResource\Pages;
use App\Filament\Resources\DoctorResource\RelationManagers;
use App\Models\Category;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Form;
use Filament\Infolists\Components\Grid;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Symfony\Contracts\Service\Attribute\Required;

class DoctorResource extends Resource
{
    protected static ?string $model = User::class;


    protected static ?string $navigationIcon = 'heroicon-o-user';
    protected static ?string $label = 'Doctor';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Doctor Information')
                    ->description('Enter the doctor information.')
                    ->schema([
                        Select::make('category_id')
                            ->label('Category')
                            ->options(Category::query()->pluck('name', 'id'))
                            ->columnSpanFull(),
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('phone')
                            ->required(),
                        Textarea::make('about')
                            ->required()
                            ->columnSpanFull(),
                        Textarea::make('address')
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('experience')
                            ->required()
                            ->columnSpanFull()
                            ->numeric(),
                        TimePicker::make('start_time')
                            ->required()
                            ->before('end_time'),
                        TimePicker::make('end_time')
                            ->required()
                            ->after('start_time'),
                        FileUpload::make('image')
                            ->label('Profile Picture')
                            ->image()
                            ->required()
                            ->directory('doctors')
                            ->columnSpanFull()


                    ])->columns(2),

                Section::make('Login Information')
                    ->description('Enter the login information.')
                    ->schema([
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->unique()
                            ->columnSpanFull(),
                        TextInput::make('password')
                            ->password()
                            ->required()
                            ->confirmed(),
                        TextInput::make('password_confirmation')
                            ->password()
                            ->required()
                    ])
                    ->columns(2)
                    ->hiddenOn('edit'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('email'),
                TextColumn::make('doctorDetail.phone')
                    ->label('Phone'),
                TextColumn::make('doctorDetail.experience')
                    ->label('Experience'),
                TextColumn::make('doctorDetail.start_time')
                    ->label('Start Time'),
                TextColumn::make('doctorDetail.end_time')
                    ->label('End Time'),
            ])

            ->filters([
                //
            ])
            ->modifyQueryUsing(fn (Builder $query): Builder => $query->where('role', 'doctor')->where('is_admin', false))
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->infolist([
                        Grid::make([
                            'sm' => 1,
                            'md' => 2,
                        ])->schema([
                            TextEntry::make('name'),
                            TextEntry::make('email'),
                            TextEntry::make('doctorDetail.phone')
                                ->label('Phone'),
                            TextEntry::make('doctorDetail.about')
                                ->label('About'),
                            TextEntry::make('doctorDetail.address')
                                ->label('Address'),
                            TextEntry::make('doctorDetail.experience')
                                ->label('Experience'),
                            TextEntry::make('doctorDetail.start_time')
                                ->label('Start Time'),
                            TextEntry::make('doctorDetail.end_time')
                                ->label('End Time'),
                            ImageEntry::make('doctorDetail.image')
                                ->label('Profile Picture'),

                        ])
                    ]),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageDoctors::route('/'),
        ];
    }
}
