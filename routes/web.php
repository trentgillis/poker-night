<?php

use App\Http\Controllers\CashGameController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LeaderboardController::class, 'index'])->name('leaderboard');

Route::middleware('auth')->group(function () {
    Route::post('/cash-games', [CashGameController::class, 'store'])->name('cash-games.store');
    Route::post('/cash-games/{cashGame}/end', [CashGameController::class, 'end'])->name('cash-games.end');
    Route::post('/cash-games/{cashGame}/join', [CashGameController::class, 'join'])->name('cash-games.join');
    Route::post('/cash-games/{cashGame}/rebuy', [CashGameController::class, 'rebuy'])->name('cash-games.rebuy');
    Route::post('/cash-games/{cashGame}/cash-out', [CashGameController::class, 'cashOut'])->name('cash-games.cash-out');
});
Route::get('/cash-games', [CashGameController::class, 'index'])->name('cash-games.index');
Route::get('/cash-games/{cashGame}', [CashGameController::class, 'show'])->name('cash-games.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/profile/{profile}', [ProfileController::class, 'show'])->name('profile.show');

require __DIR__ . '/auth.php';
