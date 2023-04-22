<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ColonyResource\Pages;
use App\Filament\Resources\ColonyResource\RelationManagers;
use App\Models\Colony;
use App\Models\User;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ColonyResource extends Resource
{
    protected static ?string $model = Colony::class;

    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static ?string $navigationLabel = 'Colonie';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\Grid::make(1)
            ->schema([
                Forms\Components\TextInput::make('name')->required()->label("Nome"),
                Forms\Components\TextInput::make('lat')->required()->label("Latitudine"),
                Forms\Components\TextInput::make('lon')->required()->label("Longitudine"),
                Forms\Components\DatePicker::make('last_feed')->required()->label("Ultima visita"),
                Forms\Components\Select::make('last_feed_user_id')
                    ->required()
                    ->options(User::all()->pluck('name', 'id'))
                    ->searchable()
                    ->label("Utente ultima visita"),
            ])
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->sortable()->label("Nome"),
                Tables\Columns\TextColumn::make('lat')->sortable()->label("Latitudine"),
                Tables\Columns\TextColumn::make('lon')->sortable()->label("Longitudine"),
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
            'index' => Pages\ListColonies::route('/'),
            'create' => Pages\CreateColony::route('/create'),
            'edit' => Pages\EditColony::route('/{record}/edit'),
        ];
    }
}
