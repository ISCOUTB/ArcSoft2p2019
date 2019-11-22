<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>ApiFull-Reddit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <div class="col align-self-center">
                <div class="col-md-8 col-md-offset-2"><br />
                    <div aling="center">
                        <div class="row justify-content-md-center" ><h1 class="text-danger">Api Reddit
                        <img src="http://www.vectorico.com/download/social_media/Reddit-Icon.png" width="125px" height="125px"></h1></div>
                    </div>
                  
            </div><br/>
                
                <div class="container">
                    <table class="table">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Karma</th>
                        </tr>
                        <?php
                            echo '
                            <tr>
                                <td>'.$ident.'</td>
                                <td>'.$usuario.'</td>
                                <td>'.$elkarma.'</td>
                            </tr>
                            ';                            
                        ?>
                    </table>
                </div>
            </div>
            </form>

        </div>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>

</html>