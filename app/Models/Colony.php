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
        "serial",
        "name",
        "lat",
        "lon",
        "last_feed",
        "last_feed_user_id",
        "picture",
        "note",
    ];

    protected $casts = [
        "last_feed" => "date",
    ];

    protected $appends = [
        'address',
    ];

    public function getAddressAttribute(): array
    {
        return [
            "lat" => (float)$this->lat,
            "lng" => (float)$this->lon,
        ];
    }

    public function setAddressAttribute(?array $location): void
    {
        if (is_array($location))
        {
            $this->attributes['lat'] = $location['lat'];
            $this->attributes['lon'] = $location['lng'];
            unset($this->attributes['address']);
        }
    }

    public static function getLatLngAttributes(): array
    {
        return [
            'lat' => 'lat',
            'lng' => 'lon',
        ];
    }

    public static function getComputedLocation(): string
    {
        return 'address';
    }

    public function lastFeeder(){
        return $this->hasOne(User::class, "last_feed_user_id");
    }

}
