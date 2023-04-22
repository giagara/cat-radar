<?php

namespace App\Filament\Resources\ColonyResource\Pages;

use App\Filament\Resources\ColonyResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditColony extends EditRecord
{
    protected static string $resource = ColonyResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
