<?php

namespace App\Filament\Resources\CatResource\Pages;

use App\Filament\Resources\CatResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCat extends EditRecord
{
    protected static string $resource = CatResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
