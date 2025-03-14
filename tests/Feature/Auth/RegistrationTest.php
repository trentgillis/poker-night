<?php

use Inertia\Testing\AssertableInertia;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertInertia(fn(AssertableInertia $page) => $page->component('Auth/Register', false));
});

test('new users can register', function () {
    $response = $this->post('/register', [
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('leaderboard', absolute: false));
});
