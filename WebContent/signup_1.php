<?php
    session_start();
    $_SESSION["post-data"] = $_POST;
?>
<!DOCTYPE HTML>
<html>
    <head>
        <title>HackMatch</title>
        <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Questrial|Dosis" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="cookieManager.js"></script>
    </head>

    <body onload="onLoad()">
        <div id="TopBar">
            <div>
                <h1>HackMatch</h1>
            </div>
            <nav>
                <p>
                    <a href="index.html">Home</a>
                    <a href="successStories.html">Success Stories</a>
                    <a href="login.html">Login</a>
                    <a href="signup_1.php">Sign Up</a>
                </p>
            </nav>
        </div>

        <div>
            <center> <h2> Signing up is easy as 3.14159265359</h2> </center>
        </div>

        <div id = "ContentPanel">
            <div id = "RegistrationForm">
                <form action="signup_2.php" method="POST">
                    <label for = "username">Username:</label><br>
                    <input name = "username" placeholder="Username" required autofocus></input> <br>

                    <label for = "email">Email:</label><br>
                    <input type = "email" name = "email" placeholder="Email" required></input> <br>

                    <label for = "password">Password:</label><br>
                    <input type = "password" name = "password" placeholder="Password" required></input><br>

                    <label for = "confirm">Confirm Password</label><br>
                    <input type = "password" name = "confirm" placeholder="Confirm Password" required> </input> <br>

                    Gender:<br>
                    <input type = "text" name = "gender" placeholder = "Gender" required> </input>
                    <center><button class="largebutton">Sign Up Now!</button></center>
                </form>
            </div>

            <footer id="AuthorContact">
                <p>Created by: Karl Keat and Victoria Li</p>
                <p>Contact information:
                    <a href="mailto:vl4kz@virginia.edu">vl4kz@virginia.edu</a>
                    or
                    <a href="mailto:kkf4a@virginia.edu">kkf4a@virginia.edu</a>
                </p>
            </footer>

        </div>
    </body>
</html>
