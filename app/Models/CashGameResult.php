<?php

namespace App\Models;

use Database\Factories\CashGameResultFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CashGameResult extends Model
{
    /** @use HasFactory<CashGameResultFactory> */
    use HasFactory;

    public $visible = ['id', 'buy_in_amt', 'cash_out_amt'];

    public $fillable = ['cash_game_id', 'user_id', 'buy_in_amt', 'cash_out_amt'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function game(): BelongsTo
    {
        return $this->belongsTo(CashGame::class);
    }
}
