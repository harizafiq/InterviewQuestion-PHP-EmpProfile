<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InfoStaf>
 */
class InfoStafFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => strtoupper(fake()->name()),
            "gender" => fake()->numberBetween(0,1),
            "martial_status" => fake()->numberBetween(0,1),
            "phone_no" => fake()->phoneNumber(),
            "email" => fake()->email(),
            "address" => strtoupper(fake()->address()),
            "nationality" => strtoupper(fake()->country()),
            "date_birth" => fake()->date(),
            "hire_date" => fake()->date(),
            "department" => strtoupper(fake()->word()),
        ];
    }
}
