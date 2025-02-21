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
        $cashGames = CashGame::query()
            ->with('users')
            ->orderBy('date', 'desc')
            ->get();

        return Inertia::render('CashGame/Index', [
            'cash_games' => $cashGames->makeVisible(['users']),
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

        return redirect(route('cash-games.index'))->with('success', 'Cash game added successfully.');
    }

    public function join(Request $request, CashGame $cashGame): RedirectResponse
    {
        if ($cashGame->status !== 'in_progress') {
            return redirect(route('cash-games.index'))->with('error', 'The requested game is not in progress.');
        }

        if ($cashGame->users->contains($request->user())) {
            return redirect(route('cash-games.show', $cashGame->getAttribute('id')))->with('message', 'You have already joined this game.');
        }

        $initialBuyIn = 10_00;
        switch ($cashGame->getAttribute('stakes')) {
            case '50NL':
                $initialBuyIn = 50_00;
                break;
            case 'NL1':
                $initialBuyIn = 100_00;
                break;
        }

        $cashGame->users()->attach($request->user());
        $cashGame->results()->create([
            'cash_game_id' => $cashGame->getAttribute('id'),
            'user_id' => $request->user()->id,
            'buy_in_amt' => $initialBuyIn,
        ]);
        return redirect(route('cash-games.show', $cashGame->getAttribute('id')))->with('success', 'Cash game joined successfully.');
    }

    public function rebuy(Request $request, CashGame $cashGame): RedirectResponse
    {
        $attributes = $request->validate([
            'stakes' => ['required', 'string'],
        ]);

        $request
            ->user()
            ->cashGameResults()
            ->where('cash_game_id', '=', $cashGame->getAttribute('id'))
            ->increment('buy_in_amt', (int)$attributes['stakes']);

        return redirect(route('cash-games.show', $cashGame))->with('success', 'Successfully rebought for $10.00');
    }

    public function cashOut(Request $request, CashGame $cashGame): RedirectResponse
    {
        $attributes = $request->validate([
            'buyInAmt' => ['required', 'string'],
            'cashOutAmt' => ['required', 'string'],
        ], [
            'buyInAmt.required' => 'Buy in amount is required.',
            'cashOutAmt.required' => 'Cash out amount is required.',
        ]);

        $userResult = $request
            ->user()
            ->cashGameResults()
            ->where('cash_game_id', '=', $cashGame->getAttribute('id'))
            ->first();

        if ($userResult->cash_out_amt) {
            return redirect(route('cash-games.show', $cashGame))->with('message', 'You have already cashed out of this game');
        }

        $userResult->update([
            'buy_in_amt' => (float)$attributes['buyInAmt'] * 100,
            'cash_out_amt' => (float)$attributes['cashOutAmt'] * 100,
        ]);

        return redirect(route('cash-games.show', $cashGame))->with('success', 'Successfully cashed out');
    }

    public function end(CashGame $cashGame): RedirectResponse
    {
        Gate::authorize('end', CashGame::class);

        $cashGame
            ->results()
            ->whereIn('user_id', $cashGame->users()->pluck('id'))
            ->whereNull('cash_out_amt')
            ->update(['cash_out_amt' => 0]);
        $cashGame->update(['status' => 'complete']);

        return redirect(route('cash-games.show', $cashGame))->with('success', 'Cash game ended successfully');
    }
}
