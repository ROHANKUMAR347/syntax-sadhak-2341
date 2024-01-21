function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username==="password" && password==="password"){
        alert("Welcome to our website, " + "!");
        window.location.href="google.com";
    } else{
        alert("Please enter valid username and password");
    }

    
}

function signup() {
    var name = document.getElementById("name").value;
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    
    alert("Welcome to our website, " + name + "!");
}

function showSignup() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
}

function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "none";
}






