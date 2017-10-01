function datingQuiz() {
    document.getElementById("RegistrationForm").innerHTML = ' \
    <form onsubmit="register(); return false;"> \
        <label for = "lang">What programming languages do you use?</label><br> \
        <input type = "text" id = "lang" placeholder="Python, JS, C++, ..." required autofocus></input> <br> \
        <label for = "leastFavPL">What\'s your least favorite language?</label><br> \
        <input type = "text" id = "leastFavPL" placeholder="PHP, Haskell, Java, ..." required></input> <br> \
        <label for = "textEditor">Preferred Text Editor:</label><br> \
        <input type= "text" id = "textEditor" placeholder="Vim, Emacs, Atom, ..." required></input><br> \
        <label type = "text" for = "boolean">What is your favorite boolean operator? (AND, OR, NOT) \
        <input type = "text" id = "boolean" pattern="AND|OR|NOT|and|or|not|And|Or|Not" placeholder="AND, OR, NOT" required> </input> <br> \
        <label for = "favSort">What is your favorite sorting algorithm?</label><br> \
        <input type = "text" id="favSort" placeholder = "Merge Sort, Bogo Sort, Heap Sort, ..." required> </input> \
        <center><button class="largebutton">Next</button></center> \
         \
    </form>';
}
function register() {
    document.getElementById("RegistrationForm").innerHTML = ' \
    <div> \
        <span>Thank you for registering!</span> <br> \
        <center><button onclick="window.history.go(-2)" class="largebutton">Go Back</button></center> \
    </div>'

}
