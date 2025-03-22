<?php

use App\Models\CashGame;
use App\Models\CashGameResult;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('it should render the leaderboard with users ordered by total winnings', function () {
    $game = CashGame::factory()->create();
    $users = User::factory()->count(3)->create();
    foreach ($users as $user) {
        CashGameResult::factory()->create([
            'user_id' => $user->id,
            'cash_game_id' => $game->id,
        ]);
    }

    $users = $users->sortByDesc(fn(User $user) => $user->total_winnings)->values();

    $response = $this->get(route('leaderboard'));
    $response->assertInertia(function (AssertableInertia $page) use ($users) {
        return $page->component('Leaderboard/Index', false)
            ->has('users', 3)
            ->has('users.0', fn(AssertableInertia $page) => $page
                ->where('first_name', $users[0]->first_name)
                ->where('total_winnings', $users[0]->total_winnings)
                ->etc())
            ->has('users.1', fn(AssertableInertia $page) => $page
                ->where('first_name', $users[1]->first_name)
                ->where('total_winnings', $users[1]->total_winnings)
                ->etc())
            ->has('users.2', fn(AssertableInertia $page) => $page
                ->where('first_name', $users[2]->first_name)
                ->where('total_winnings', $users[2]->total_winnings)
                ->etc());
    });

});
