<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ColonyReourceResource\RelationManagers\CatsRelationManager;
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
use Cheesegrits\FilamentGoogleMaps\Fields\Map;
use Filament\Resources\Pages\ListRecords;

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
            Forms\Components\Grid::make(2)
            ->schema([
                Forms\Components\TextInput::make('name')->required()->label("Nome"),
                Forms\Components\TextInput::make('serial')->required()->label("Seriale"),
                Forms\Components\TextInput::make('lat')->required()->label("Latitudine"),
                Forms\Components\TextInput::make('lon')->required()->label("Longitudine"),
                Forms\Components\DatePicker::make('last_feed')->required()->label("Ultima visita"),
                Forms\Components\Select::make('last_feed_user_id')->required()
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

                Map::make('address')
                    ->mapControls([
                        'mapTypeControl'    => false,
                        'scaleControl'      => true,
                        'streetViewControl' => true,
                        'rotateControl'     => false,
                        'fullscreenControl' => false,
                        'searchBoxControl'  => false, // creates geocomplete field inside map
                        'zoomControl'       => true,
                    ])
                    ->defaultZoom(18)
                    ->label("Mappa"),
            ]),

        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('picture')->disk('uploads'),
                Tables\Columns\TextColumn::make('name')->sortable()->label("Nome"),
                Tables\Columns\TextColumn::make('lat')->sortable()->label("Latitudine"),
                Tables\Columns\TextColumn::make('lon')->sortable()->label("Longitudine"),
                Tables\Columns\TextColumn::make('cats_count')->counts('cats')->label("Numero gatti"),
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
            CatsRelationManager::class
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
