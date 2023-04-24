<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('colonies', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->string("name");
            $table->string("lat");
            $table->string("lon");
            $table->date("last_feed");
            $table->foreignId("last_feed_user_id")->constrained("users")->onUpdate("cascade")->onDelete("cascade");
            $table->string("note")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('colonies');
    }
};
