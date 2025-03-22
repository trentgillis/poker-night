<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class LeaderboardController extends Controller
{
    public function index(): Response
    {
        $users = User::with('cashGames', 'cashGameResults')
            ->withCount('cashGames')
            ->get()
            ->makeVisible(['cash_games_count', 'total_winnings']);

        $users = $users->sortByDesc(fn(User $user) => $user->total_winnings)->values();

        return Inertia::render('Leaderboard/Index', [
            'users' => $users
        ]);
    }
}
