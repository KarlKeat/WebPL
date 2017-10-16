<?php 
    session_start();
    $_SESSION["post1"] = $_POST;
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
                <form action="signup_3.php" method="POST">
                    <label for = "lang">What programming languages do you use?</label><br>
                    <input type = "text" name = "lang" placeholder="Python, JS, C++, ..." required autofocus></input> <br>
                    <label for = "leastFavPL">What's your least favorite language?</label><br>
                    <input type = "text" name = "leastFavPL" placeholder="PHP, Haskell, Java, ..." required></input> <br>
                    <label for = "textEditor">Preferred Text Editor:</label><br>
                    <input type= "text" name = "textEditor" placeholder="Vim, Emacs, Atom, ..." required></input><br>
                    <label type = "text" for = "boolean">What is your favorite boolean operator? (AND, OR, NOT) </label><br>
                    <input type = "text" name = "boolean" pattern="AND|OR|NOT|and|or|not|And|Or|Not" placeholder="AND, OR, NOT" required> </input> <br> \
                    <label for = "favSort">What is your favorite sorting algorithm?</label><br>
                    <input type = "text" name = "favSort" placeholder = "Merge Sort, Bogo Sort, Heap Sort, ..." required> </input>
                    <center><button class="largebutton">Next</button></center>
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
