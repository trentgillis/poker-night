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
            'cash_games' => $cashGames,
        ]);
    }

    public function show(CashGame $cashGame): Response
    {
        $players = $cashGame
            ->users()
            ->with(['cashGameResults' => function ($query) use ($cashGame) {
                $query->where('cash_game_id', '=', $cashGame->getAttribute('id'));
            }])
            ->get();

        $players = $players->map(function ($player) {
            $player['game_result'] = $player->cashGameResults->values()->first()->only(['buy_in_amt', 'cash_out_amt']);

            return $player->makeVisible(['game_result']);
        });

        return Inertia::render('CashGame/Show', [
            'cash_game' => $cashGame,
            'players' => $players,
        ]);
    }
}
