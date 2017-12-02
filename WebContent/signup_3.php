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
    $profileImage = null;
    
    function submit() {
    	global $username, $email, $password, $gender, $pLanguages, $leastFavPL, $textEditor, $booleanOp, $favSort, $profileImage, $imgContent;
        $username = $_SESSION["post1"]["username"];
        $email = $_SESSION["post1"]["email"];
        $password = $_SESSION["post1"]["password"];
        $gender = $_SESSION["post1"]["gender"];
        $pLanguages = $_POST["lang"];
        $leastFavPL = $_POST["leastFavPL"];
        $textEditor = $_POST["textEditor"];
        $booleanOp = $_POST["boolean"];
        $favSort = $_POST["favSort"];        
                
        $check = getimagesize($_FILES["image"]["tmp_name"]);
        if($check !== false){
        	$profileImage = $_FILES['image']['tmp_name'];
        	$imgContent = addslashes(file_get_contents($profileImage));
        }
        
        $servername = "localhost";
        $dbname = "hackmatch";
        
        // Create connection
        // Create connection
        $conn = mysqli_connect($servername, "vl4kz", "cs4640", $dbname);
        // Check connection
        if (!$conn) {
        	die("Connection failed: " . mysqli_connect_error());
        }
        
        $table = "USER_DATA";
        $query = "SELECT Username FROM " . $table; // that should be id and not ID
        //$result = mysql_query($mysql_connexn, $query); // your original code
        // however connection comes last in mysql method, unlike mysqli
        $result = mysqli_query($conn,$query);
        
        $tablesql = "CREATE TABLE IF NOT EXISTS USER_DATA (
		email VARCHAR(255) NOT NULL,
		username VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL,
		gender VARCHAR(255) NOT NULL,
		pLanguages VARCHAR(255) NOT NULL,
		leastFavPL VARCHAR(255) NOT NULL,
		textEditor VARCHAR(255) NOT NULL,
		booleanOp VARCHAR(255) NOT NULL,
		favSort VARCHAR(255) NOT NULL,
		profileImage LONGBLOB NOT NULL,
		PRIMARY KEY(email)
    )";
        
        $insertsql = "INSERT INTO USER_DATA (email, username, password, gender, pLanguages, leastFavPL, textEditor, booleanOp, favSort, profileImage)
VALUES ('$email', '$username', '$password', '$gender', '$pLanguages', '$leastFavPL', '$textEditor', '$booleanOp', '$favSort', '$imgContent')";
        
        if(empty($result)) {
        	echo "<p>" . $table . " table does not exist</p>";
        	mysqli_query($conn,$tablesql);
        }
        else {
        	if (mysqli_query($conn, $insertsql) === TRUE) {
        		echo "Registration successful!";
        	} else {
        		echo "Error: " . $sql . "<br>" . $conn->error;
        	}
        } // else
        	
        mysqli_close($conn);
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
                    <a href="http://localhost:8080/HackMatch/index.html">Home</a>
                    <a href="http://localhost:8080/HackMatch/successStories.html">Success Stories</a>
                    <a href="http://localhost:8080/HackMatch/login.html">Login</a>
                    <a href="http://localhost:80/HackMatch/signup_1.php">Sign Up</a>
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
