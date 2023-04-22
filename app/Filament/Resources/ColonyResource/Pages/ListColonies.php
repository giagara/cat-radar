<?php

namespace App\Filament\Resources\ColonyResource\Pages;

use App\Filament\Resources\ColonyResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListColonies extends ListRecords
{
    protected static string $resource = ColonyResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
