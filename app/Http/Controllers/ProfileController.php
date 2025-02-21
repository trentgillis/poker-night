<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $request->user()->makeVisible(['email']);

        return Inertia::render('Profile/Edit');
    }

    public function show(User $profile): Response
    {
        $playerProfile = User::query()
            ->with([
                'cashGameResults',
                'cashGames' => function ($query) {
                    $query->with('results');
                }
            ])
            ->where('id', '=', $profile['id'])
            ->withCount('cashGames')
            ->first();

        $playerProfile['totalWinnings'] = $playerProfile['cashGameResults']
            ->reduce(function ($carry, $game) {
                return $carry + ($game['cash_out_amt'] - $game['buy_in_amt']);
            }, 0);

        $playerProfile['biggestWin'] = max($playerProfile['cashGameResults']->map(function ($item) {
            return $item['cash_out_amt'] - $item['buy_in_amt'];
        })->all());

        return Inertia::render('Profile/Show', [
            'profile' => $playerProfile->makeVisible('cashGames', 'cash_games_count', 'totalWinnings', 'biggestWin'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('success', 'Your profile information has been updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'delete_confirm_password' => ['required', 'current_password'],
        ], [
            'delete_confirm_password.required' => 'The password field is required',
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
