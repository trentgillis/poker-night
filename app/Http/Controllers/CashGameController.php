<?php

namespace App\Http\Controllers;

use App\Models\CashGame;
use Inertia\Inertia;
use Inertia\Response;

class CashGameController extends Controller
{
    public function index(): Response
    {
        $cashGames = CashGame::all()->sortByDesc('date')->values()->all();

        return Inertia::render('CashGame/Index', [
            'cashGames' => $cashGames,
        ]);
    }

    public function show(CashGame $cashGame): Response
    {
        $players = $cashGame
            ->users()
            ->with('cashGameResults')
            ->get()
            ->makeVisible(['cashGameResults']);

        return Inertia::render('CashGame/Show', [
            'cash_game' => $cashGame,
            'players' => $players,
        ]);
    }
}
