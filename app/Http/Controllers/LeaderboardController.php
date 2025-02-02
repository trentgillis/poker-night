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
            ->get();

        $users = $users->map(function ($user) {
            $user['total_winnings'] = $user->totalWinnings;

            return $user->only(['id', 'first_name', 'last_name', 'total_winnings', 'cash_games_count']);
        })->sortByDesc('total_winnings')->values()->all();

        return Inertia::render('Leaderboard/Index', [
            'users' => $users
        ]);
    }
}
