<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Todos</title>
    </head>
    <body>
        <div id="root"></div>
        <script defer type="text/javascript" src="/js/todos.js"></script>
    </body>
</html>
