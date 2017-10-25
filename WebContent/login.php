<!-- http://form.guide/php-form/php-login-form.html
https://www.tutorialspoint.com/php/php_login_example.htm -->

<html>
<head>
  <title>You are logged in!</title>
  <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Questrial|Dosis" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<?php
  $errorMsg = '';
  if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
    if (!empty($_POST['email']) && !empty($_POST['password'])) {
      $email = $_POST['email'];
      $password = $_POST['password'];

      if(!checkLogIn($email,$password))
      {
        echo '<center> <body> You have entered a wrong username or password. <br>';
        echo 'Please return back and try again. </body> </center>';
        echo '<center><button class="largebutton" onclick="window.location=\'login.html\';">Go back</button></center>';

        return false;
      }

      $_SESSION['valid'] = true;
      $_SESSION['timeout'] = time();
      $_SESSION['username'] = $email;
      echo 'hello, this works';
    }
    else {
      $errorMsg = 'You have entered a wrong username or password.';
    }
    return $errorMsg;
  }

  function readData($filename) {
    $file = fopen($filename, "r");      // r: read only
    while ( !feof($file) ) {
      $line_of_text[] = fgetcsv($file, 1024);
    }
      fclose($file);
      return $line_of_text;
  }

  function checkLogIn($email, $password) {
    $userArray = readData('database.csv');

    foreach($userArray as $value) {
      if($email == $value[0] && $password == $value[1]) {
        return true;
      }
    }

    return false;
  }
 ?>
