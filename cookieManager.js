
var email_password = {
    "kk4fa@virginia.edu": "password123",
    "vl4kz@virginia.edu": "javasucks"                    
    };

var user_data = {
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
                    <a href="" onclick="logOut()">Log Out</a> \
                </p> \
            </nav> '
    }
}

function loginRedirect() {
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
    var cookie = document.cookie;
    return cookie.includes("email=");
}

function getCurrentUser() {
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
    document.cookie = "";
    document.window.location = "./index.html"
}

function loadProfile() {
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

function logOut() {
    var expiry = new Date();
    document.cookie = "user=;expires=+"+expiry.toUTCString()+"; path=/; domain=.localhost";
}
