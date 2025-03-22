<?php

namespace App\Models;

use Database\Factories\CashGameFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CashGame extends Model
{
    use HasFactory;

    protected $visible = ['id', 'stakes', 'date', 'status', 'results'];
    protected $fillable = ['stakes', 'date', 'status'];

    public function results(): HasMany
    {
        return $this->hasMany(CashGameResult::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
