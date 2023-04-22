<?php

namespace App\Models;

use App\Traits\HasUuidAutoGen;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colony extends Model
{
    use HasFactory;
    use HasUuidAutoGen;

    protected $fillable = [
        "uuid",
        "name",
        "lat",
        "lon",
        "last_feed",
        "last_feed_user_id",
        "note",
    ];

    protected $casts = [
        "last_feed" => "date",
    ];


}
