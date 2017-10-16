<?php
    session_start();
    $username = "none";
    $email = "none";
    $password = "none";
    $gender = "none";
    $pLanguages = "none";
    $leastFavPL = "none";
    $textEditor = "none";
    $booleanOp = "none";
    $favSort = "none";

    function submit() {
        global $username, $email, $password, $gender, $pLanguages, $leastFavPL, $textEditor, $booleanOp, $favSort;
        $username = $_SESSION["post1"]["username"];
        $email = $_SESSION["post1"]["email"];
        $password = $_SESSION["post1"]["password"];
        $gender = $_SESSION["post1"]["gender"];
        $pLanguages = $_POST["lang"];
        $leastFavPL = $_POST["leastFavPL"];
        $textEditor = $_POST["textEditor"];
        $booleanOp = $_POST["boolean"];
        $favSort = $_POST["favSort"];
    }
    submit();
    function displayResponses() {
        global $username, $email, $password, $gender, $pLanguages, $leastFavPL, $textEditor, $booleanOp, $favSort;        
        echo "Username: $username</br>";
        echo "Email: $email</br>";
        echo "Gender: $gender</br>";
        echo "Programming Languages: $pLanguages</br>";
        echo "Least Favorite Languages: $leastFavPL</br>";
        echo "Favorite Text Editor: $textEditor</br>";
        echo "Favorite Boolean Operator: $booleanOp</br>";
        echo "Favorite Sort: $favSort</br>";
    }



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
                    <a href="signup.html">Sign Up</a>
                </p>
            </nav>
        </div>

        <div>
            <center> <h2> Signing up is easy as 3.14159265359</h2> </center>
        </div>

        <div id = "ContentPanel">
            <div id = "RegistrationForm">
                <span>Thank you for registering!</span></br>
                <?php displayResponses();?>
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
