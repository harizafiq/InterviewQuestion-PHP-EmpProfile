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
        Schema::create('info_stafs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->tinyInteger('gender');
            $table->string('martial_status');
            $table->string('phone_no', 20);
            $table->string('email', 50);
            $table->string('address');
            $table->date('date_birth');
            $table->string('nationality', 20);
            $table->date('hire_date');
            $table->string('department', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('info_stafs');
    }
};
