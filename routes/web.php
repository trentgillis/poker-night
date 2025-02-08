<?php

use App\Http\Controllers\CashGameController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LeaderboardController::class, 'index'])->name('leaderboard');

Route::middleware('auth')->group(function () {
    Route::post('/cash-games', [CashGameController::class, 'store'])->name('cash-games.store');
    Route::post('/cash-games/{cashGame}/join', [CashGameController::class, 'join'])->name('cash-game.join');
});
Route::get('/cash-games', [CashGameController::class, 'index'])->name('cash-games');
Route::get('/cash-games/{cashGame}', [CashGameController::class, 'show'])->name('cash-game');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
