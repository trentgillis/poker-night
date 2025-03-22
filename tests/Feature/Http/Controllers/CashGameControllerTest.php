<?php

use App\Models\CashGame;
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

});

test('admins can create cash games', function () {

});

test('non-admins cannot create cash games', function () {

});

test('admins can end cash games', function () {

});

test('non-admins cannot end cash games', function () {

});

test('users can join in progress games', function () {

});

test('users cannot join games that are not in progress', function () {

});

test('users can rebuy in a game they have joined', function () {

});

test('users cannot rebuy if they have not joined the game', function () {

});

test('users can successfully cash out', function () {

});
