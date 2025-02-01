<?php

namespace Database\Factories;

use App\Models\CashGame;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<CashGame>
 */
class CashGameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => 'complete',
            'stakes' => '10NL',
            'date' => fake()->date(),
        ];
    }
}
