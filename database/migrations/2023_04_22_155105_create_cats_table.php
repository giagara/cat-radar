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
        Schema::create('cats', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->string("name");
            $table->string("color");
            $table->boolean("sterilized")->default(false);
            $table->date("birth_date");
            $table->date("last_seen_at");
            $table->foreignId("last_seen_user_id")->constrained("users")->onUpdate("cascade")->onDelete("cascade");
            $table->text("note");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cats');
    }
};
