<?php

use App\Models\CashGame;
use App\Models\User;
use Illuminate\Support\Facades\Date;
use Inertia\Testing\AssertableInertia;

test('renders the cash game list page', function () {
    CashGame::factory()->count(10)->create();

    $response = $this->get(route('cash-games.index'));
    $response->assertInertia(function (AssertableInertia $page) {
        return $page->component('CashGame/Index', false)
            ->has('cash_games', 10)
            ->has('cash_games.0', fn(AssertableInertia $page) => $page
                ->has('id')
                ->has('date')
                ->has('stakes')
                ->has('status')
                ->has('users'));
    });
});

test('renders the cash game show page', function () {
    $cashGameId = 1;
    CashGame::factory()->create(['id' => $cashGameId]);

    $response = $this->get(route('cash-games.show', $cashGameId));
    $response->assertInertia(function (AssertableInertia $page) {
        return $page->component('CashGame/Show', false)
            ->has('cash_game', fn(AssertableInertia $page) => $page
                ->has('id')
                ->has('date')
                ->has('stakes')
                ->has('status'))
            ->has('players');
    });
});

test('admins can create cash games', function () {
    $user = User::factory()->asAdmin()->create();

    $response = $this->actingAs($user)->post(route('cash-games.store'), [
        'stakes' => '10NL',
        'status' => 'in_progress',
        'date' => Date::now()->toDateString()
    ]);
    $response->assertSessionDoesntHaveErrors()->assertRedirect(route('cash-games.index'));
});

test('admin cannot create a cash game if one is already in progress', function () {
    CashGame::factory()->create(['status' => 'in_progress']);
    $user = User::factory()->asAdmin()->create();

    $response = $this->actingAs($user)->post(route('cash-games.store'), [
        'stakes' => '10NL',
        'status' => 'in_progress',
        'date' => Date::now()->toDateString()
    ]);
    $response->assertSessionHasErrors();
});

test('non-admins cannot create cash games', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('cash-games.store'), [
        'stakes' => '10NL',
        'status' => 'in_progress',
        'date' => Date::now()->toDateString()
    ]);
    $response->assertNotFound();

});

test('admins can end cash games', function () {
    $cashGame = CashGame::factory()->create(['status' => 'in_progress']);
    $user = User::factory()->asAdmin()->create();

    $response = $this->actingAs($user)->post(route('cash-games.end', $cashGame));
    $response->assertSessionDoesntHaveErrors()
        ->assertRedirect(route('cash-games.show', $cashGame));
});

test('admins cannot end cash games that are not in progress', function () {
    $cashGame = CashGame::factory()->create(['status' => 'complete']);
    $user = User::factory()->asAdmin()->create();

    $response = $this->actingAs($user)->post(route('cash-games.end', $cashGame));
    $response->assertSessionHasErrors();
});

test('non-admins cannot end cash games', function () {
    $cashGame = CashGame::factory()->create(['status' => 'in_progress']);
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('cash-games.end', $cashGame));
    $response->assertNotFound();
});

test('users can join in progress games', function () {
    $cashGame = CashGame::factory()->create(['status' => 'in_progress']);
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('cash-games.join', $cashGame));
    $this->assertContains($user->id, $cashGame->users->map(fn(User $user) => $user->id)->values());
    $response->assertSessionDoesntHaveErrors()
        ->assertRedirect(route('cash-games.show', $cashGame));
});

test('users cannot join games that are not in progress', function () {
    $cashGame = CashGame::factory()->create(['status' => 'complete']);
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('cash-games.join', $cashGame));
    $this->assertNotContains($user->id, $cashGame->users->map(fn(User $user) => $user->id)->values());
    $response->assertSessionHas('error')
        ->assertRedirect(route('cash-games.index'));
});

test('users can rebuy in a game they have joined', function () {

});

test('users cannot rebuy if they have not joined the game', function () {

});

test('users can successfully cash out', function () {

});
