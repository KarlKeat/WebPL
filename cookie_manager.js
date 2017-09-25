
var username_password = {
    "l0n3lyb01": "password123",
    "python_babe1337": "javasucks"                    
    };

function isLoggedIn() {
    var cookie = document.cookie;
    return cookie !== "";
}

function logIn(username, password) {
    if (username_password[username] === password) {
        var expiry = new Date();
        expiry.setTime(expiry.getTime() + 3600*1000);
        document.cookie = "user=" + username + "; expires="+expiry.toUTCString()+"; path=/; domain=.localhost";
        return true;
    }
    else {
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