<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="/favicon.svg">

    <title inertia>{{ config('app.name', 'PokerNight') }}</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}/index.ts"])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-background text-white h-full">
@inertia
</body>
</html>
