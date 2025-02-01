<?php

namespace Database\Seeders;

use App\Models\CashGame;
use App\Models\CashGameResult;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $games = CashGame::factory()
            ->count(10)
            ->create();

        $users = User::factory()
            ->count(10)
            ->hasAttached($games)
            ->create();


        foreach ($users as $user) {
            foreach ($games as $game) {
                CashGameResult::factory()->create([
                    'user_id' => $user->id,
                    'cash_game_id' => $game->id,
                ]);
            }
        }
    }
}
