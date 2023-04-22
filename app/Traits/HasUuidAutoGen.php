<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

Trait HasUuidAutoGen{

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::creating(function (Model $model) {

            if(($model->uuid ?? "") === ""){
                $model->uuid = Str::uuid();
            }

        });
    }


}
