
function onLoad() {
    loginRedirect();
    if (isLoggedIn()) {
        document.getElementById("NavBar").innerHTML = ' \
        <div id="TopBar"> \
            <div> \
                <h1>HackMatch</h1> \
            </div> \
            <nav> \
                <p> \
                    <a href="index.html">Home</a> \
                    <a href="profile.html">My Profile</a> \
                </p> \
            </nav> \
        </div> '
    }
}

function loginRedirect() {
    var currentPage = window.location.pathname;
    if (currentPage == "/login.html" || currentPage == "/successStories.html" || currentPage == "signup.html") {
        if (isLoggedIn()) {
            window.location = "/profile.html"
        }
    }

}

var email_password = {
    "kk4fa@virginia.edu": "password123",
    "vl4kz@virginia.edu": "javasucks"                    
    };

function isLoggedIn() {
    var cookie = document.cookie;
    return cookie != "";
}

function logIn() {
    var submission = document.getElementById("LoginForm").children;
    var email = submission.namedItem("email").value;
    var password = submission.namedItem("password").value;

    if (email_password[email] === password) {
        var expiry = new Date();
        expiry.setTime(expiry.getTime() + 3600*1000);
        document.cookie = "email=" + email + "; expires="+expiry.toUTCString()+"; path=/; domain=.app.localhost";
        console.log("logged in!");
        return true;
    }
    else {
        console.log("login failed");
        return false;
    }

    // https://www.w3schools.com/js/js_cookies.asp
    // https://stackoverflow.com/a/3795002
    // https://stackoverflow.com/a/2619108
}

function logOut() {
    var expiry = new Date();
    document.cookie = "user=;expires=+"+expiry.toUTCString()+"; path=/; domain=.localhost";
}