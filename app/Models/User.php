<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $visible = ['id', 'first_name', 'last_name', 'total_winnings', 'is_admin'];
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $appends = ['total_winnings'];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function cashGameResults(): HasMany
    {
        return $this->hasMany(CashGameResult::class);
    }

    public function cashGames(): BelongsToMany
    {
        return $this->belongsToMany(CashGame::class);
    }

    protected function totalWinnings(): Attribute
    {

        return new Attribute(
            get: function () {
                $cash_game_results = $this->cashGameResults()->whereNotNull('cash_out_amt')->get();

                return $cash_game_results->reduce(function ($acc, $result) {
                    return $acc + ($result->cash_out_amt - $result->buy_in_amt);
                }, 0);
            }
        );
    }
}
