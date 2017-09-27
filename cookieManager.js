
var email_password = { 
    // Hard-coded list of logins, temporary
    "kk4fa@virginia.edu": "password123",
    "vl4kz@virginia.edu": "javasucks"                    
    };

var user_data = {
    // Hard-coded list of account details, temporary
    "kk4fa@virginia.edu": {
        "name": "Karl Keat",
        "gender": "Male",
        "img": "./media/karl.jpg",
        "location": "Charlottesville, VA",
    },
    "vl4kz@virginia.edu": {
        "name": "Victoria Li",
        "gender": "Female",
        "img": "./media/victoria.jpg",
        "location": "Charlottesville, VA",
    }
};

function onLoad() {
    // Determines if the user is logged in, if so, adjusts Navigation bar and redirects to profile
    console.log(document.cookie);
    loginRedirect();
    if (isLoggedIn()) {
        document.getElementById("TopBar").innerHTML = ' \
            <div> \
                <h1>HackMatch</h1> \
            </div> \
            <nav> \
                <p> \
                    <a href="index.html">Home</a> \
                    <a href="profile.html">My Profile</a> \
                    <a href="#" onclick="logOut()">Log Out</a> \
                </p> \
            </nav> '
    }
}

function loginRedirect() {
    // Redirects away from pages which cannot be accessed while logged in.
    var currentPage = window.location.pathname;
    currentPage = currentPage.split('/').slice(-1)[0];
    console.log(currentPage);
    if (currentPage == "login.html" || currentPage == "successStories.html" || currentPage == "signup.html") {
        if (isLoggedIn()) {
            console.log("redirecting");
            window.location = "./profile.html"
        }
    }

}

function isLoggedIn() {
    // Returns true if the user is logged in.
    var cookie = document.cookie;
    return cookie.includes("email=");
}

function getCurrentUser() {
    // Returns the email of the current user.
    var cookie = document.cookie;
    var entries = cookie.split(";")
    for (var x = 0; x < entries.length; x++) {
        if (entries[x].includes("email=")) {
            return entries[x].split("=")[1];
        }
    }
    return "";
}

function logIn() {
    // Attempts to log the user in based on their entry to the login form
    var submission = document.forms[0];
    var email = submission["email"].value;
    var password = submission["password"].value;

    if (email_password[email] === password) {
        var expiry = new Date();
        expiry.setTime(expiry.getTime() + 3600*1000);
        document.cookie = "email=" + email + "; expires="+expiry.toUTCString()+"; path=/; domain=.virginia.edu";
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
    // Expires the login cookie to log the user out
    console.log("logging out");
    var expiry = new Date();
    document.cookie = document.cookie = "email=;expires=+"+expiry.toUTCString()+"; path=/; domain=.virginia.edu";
    window.location = "./index.html"
}

function loadProfile() {
    // Dynamically generates the user's profile page
    if(getCurrentUser() !== "") {
        var user = user_data[getCurrentUser()];
        document.getElementById("UserProfile").innerHTML = '\
        <div> \
            <img src=' + user["img"] + ' class="profilePicLarge"> \
        </div> \
        <div> \
            <h3>' + user["name"] + '</h3> \
            <h4>' + user["location"] + '</h4> \
            <p>' + user["gender"] + '</p> \
        </div>'
    }
}

