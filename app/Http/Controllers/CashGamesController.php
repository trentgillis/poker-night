<?php

namespace App\Http\Controllers;

use App\Models\CashGame;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CashGamesController extends Controller
{
    public function index(): Response
    {
        $cashGames = CashGame::all()->sortByDesc('date')->values()->all();

        return Inertia::render('CashGames/Index', [
            'cashGames' => $cashGames,
        ]);
    }
}
