<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CatResource\Pages;
use App\Filament\Resources\CatResource\RelationManagers;
use App\Models\Cat;
use App\Models\Colony;
use App\Models\User;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CatResource extends Resource
{
    protected static ?string $model = Cat::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube-transparent';

    protected static ?string $navigationLabel = 'Gatti';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\Grid::make(2)
            ->schema([
                Forms\Components\TextInput::make('name')->required()->label("Nome"),
                Forms\Components\TextInput::make('serial')->required()->label("Seriale"),
                Forms\Components\Select::make('colony_id')->required()
                    ->options(Colony::all()->pluck('name', 'id'))
                    ->searchable()
                    ->label("Colonia"),

                Forms\Components\DatePicker::make('birth_date')->required()->label("Data di nascita"),
                Forms\Components\TextInput::make('color')->required()->label("Colore"),
                Forms\Components\Checkbox::make('sterilized')->label("Sterilizzato"),

                Forms\Components\DatePicker::make('last_seen_at')->required()->label("Ultimo avvistamento"),
                Forms\Components\Select::make('last_seen_user_id')
                    ->required()
                    ->options(User::all()->pluck('name', 'id'))
                    ->searchable()
                    ->label("Utente ultima visita"),
            ]),
            Forms\Components\Grid::make(1)
            ->schema([
                Forms\Components\FileUpload::make('picture')
                    ->image()
                    ->disk('uploads')
                    ->maxSize(4096)
                    ->required()
                    ->label("Immagine")
                    ->imageResizeMode('cover')
                    ->imageCropAspectRatio('16:9')
                    ->imageResizeTargetWidth('1200')
                    ->imageResizeTargetHeight('800'),

                Forms\Components\TextInput::make('note')->label("Note")->default(""),

            ]),

        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('picture')->disk('uploads'),
                Tables\Columns\TextColumn::make('name')->sortable()->label("Nome"),
                Tables\Columns\TextColumn::make('colony.name')->sortable()->label("Colonia"),
                Tables\Columns\TextColumn::make('last_seen_at')->sortable()->date()->label("Ultimo avvistamento"),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCats::route('/'),
            'create' => Pages\CreateCat::route('/create'),
            'edit' => Pages\EditCat::route('/{record}/edit'),
        ];
    }
}
