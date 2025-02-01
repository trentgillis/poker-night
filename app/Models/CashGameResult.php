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

    function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    function game(): BelongsTo
    {
        return $this->belongsTo(CashGame::class);
    }
}
