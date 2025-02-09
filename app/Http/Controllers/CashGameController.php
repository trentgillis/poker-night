<?php

namespace App\Http\Controllers;

use App\Models\CashGame;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;
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

    public function store(Request $request): RedirectResponse
    {
        Gate::authorize('create', CashGame::class);

        $gameInProgress = CashGame::all()->where('status', '=', 'in_progress')->first();
        if ($gameInProgress) {
            throw ValidationException::withMessages(['root' => 'There is a cash game already in progress.']);
        }

        $attributes = $request->validate([
            'stakes' => ['required', 'string'],
            'status' => ['required', 'string'],
            'date' => ['required', 'date'],
        ]);
        CashGame::create($attributes);

        return redirect(route('cash-games'))->with('success', 'Cash game added successfully.');
    }

    public function join(Request $request, CashGame $cashGame): Response|RedirectResponse
    {
        if ($cashGame->status !== 'in_progress') {
            return redirect(route('cash-games'))->with('error', 'The requested game is not in progress.');
        }

        if ($cashGame->users->contains($request->user())) {
            return redirect(route('cash-game', $cashGame->getAttribute('id')))->with('message', 'You have already joined this game.');
        }

        $cashGame->users()->attach($request->user());
        $cashGame->results()->create([
            'cash_game_id' => $cashGame->getAttribute('id'),
            'user_id' => $request->user()->id,
            'buy_in_amt' => 10_00,
        ]);
        return redirect(route('cash-game', $cashGame->getAttribute('id')))->with('success', 'Cash game joined successfully.');
    }
}
