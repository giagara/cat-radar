<?php

namespace App\Models;

use App\Traits\HasUuidAutoGen;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    use HasFactory;
    use HasUuidAutoGen;

    protected $fillable = [
        "uuid",
        "serial",
        "colony_id",
        "name",
        "color",
        "sterilized",
        "birth_date",
        "last_seen_at",
        "last_seen_user_id",
        "picture",
        "note",
    ];

    protected $casts = [
        "sterilized" => "boolean",
        "birth_date" => "date",
        "last_seen_at" => "date",
    ];

    public function colony(){
        return $this->belongsTo(Colony::class);
    }
}
