<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class CashGamePolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(?User $user): Response
    {
        return $user?->is_admin
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can update the model.
     */
    /**
     * Determine whether the user can delete the model.
     */
    public function delete(?User $user): Response
    {
        return $user?->is_admin
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(?User $user): Response
    {
        return $user?->is_admin
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(?User $user): Response
    {
        return $user?->is_admin
            ? Response::allow()
            : Response::denyAsNotFound();
    }
}
