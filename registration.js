function datingQuiz() {
    document.getElementById("RegistrationForm").innerHTML = ' \
    <form action="register.php" method="POST"> \
        <label for = "lang">What programming languages do you use?</label><br> \
        <input type = "text" name = "lang" placeholder="Python, JS, C++, ..." required autofocus></input> <br> \
        <label for = "leastFavPL">What\'s your least favorite language?</label><br> \
        <input type = "text" name = "leastFavPL" placeholder="PHP, Haskell, Java, ..." required></input> <br> \
        <label for = "textEditor">Preferred Text Editor:</label><br> \
        <input type= "text" name = "textEditor" placeholder="Vim, Emacs, Atom, ..." required></input><br> \
        <label type = "text" for = "boolean">What is your favorite boolean operator? (AND, OR, NOT) \
        <input type = "text" name = "boolean" pattern="AND|OR|NOT|and|or|not|And|Or|Not" placeholder="AND, OR, NOT" required> </input> <br> \
        <label for = "favSort">What is your favorite sorting algorithm?</label><br> \
        <input type = "text" name = "favSort" placeholder = "Merge Sort, Bogo Sort, Heap Sort, ..." required> </input> \
        <center><button class="largebutton">Next</button></center> \
         \
    </form>';
}
function register() {
    document.getElementById("RegistrationForm").innerHTML = ' \
    <div> \
        <span>Thank you for registering!</span> </br> \
        <?php echo "test";displayResponses();?> \
    </div>'

}
