<?php

namespace App\Filament\Resources\CatResource\Pages;

use App\Filament\Resources\CatResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCat extends CreateRecord
{
    protected static string $resource = CatResource::class;
}
