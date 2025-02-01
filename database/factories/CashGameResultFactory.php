<?php

namespace Database\Factories;

use App\Models\CashGameResult;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<CashGameResult>
 */
class CashGameResultFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "buy_in_amt" => fake()->numberBetween(10_00, 20_00),
            "cash_out_amt" => fake()->numberBetween(0, 20_00),
        ];
    }
}
