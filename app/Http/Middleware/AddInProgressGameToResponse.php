<?php

namespace App\Http\Middleware;

use App\Models\CashGame;
use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Symfony\Component\HttpFoundation\Response;

class AddInProgressGameToResponse extends Middleware
{
    public function share(Request $request): array
    {
        $userJoinedGame = false;
        $inProgress = CashGame::firstWhere('status', '=', 'in_progress');
        if ($inProgress) {
            $userJoinedGame = $inProgress->users->contains($request->user());
        }

        return [
            ...parent::share($request),
            'in_progress' => $inProgress,
            'user_joined_game' => $userJoinedGame,
        ];
    }
}
