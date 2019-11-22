<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>ApiFull-Reddit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="/css/bootstrap.css">
        <link rel="stylesheet" href="/css/bootstrap-theme.css">
    </head>

    <body>
        <div class="container">
            <form action="/" method="GET">
                <div class="col-md-8 col-md-offset-2">
                    <div>
                        <h1 class="text-primary">Bienvenido a la Api <?php echo $name; ?></h1>
                        <img src="img\reddit.png">
                    </div>
                    <div class="form-group">
                        <label for="username">Username: </label>
                        <input class="form-control" type="text" id="username" name="respuesta1" placeholder="@Example" required/><br>
                    </div>
                </div>
            </form>

        </div>

        <script src="/js/bootstrap.js"></script>
    </body>

</html>