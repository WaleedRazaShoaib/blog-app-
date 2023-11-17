var signupuserName = document.getElementById("signup-userName");
var signupemail = document.getElementById("signup-email");
var signuppassword = document.getElementById("signup-password");
var signupparent = document.getElementById("signup-parent")
var loginparent = document.getElementById("login-parent")


function signupdata() {
    if (signupuserName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the username ",
        });
        // alert("user name daalo")
    }
    else {
        userNamestring = JSON.stringify(signupuserName.value);
        console.log(userNamestring)
        localStorage.setItem("username", userNamestring)
    }
    if (signupemail.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the email ",
        });
        // alert("email dalo")

    }
    else {
        emailstring = JSON.stringify(signupemail.value)
        localStorage.setItem("email", emailstring)
        console.log(emailstring)
    }

    if (signuppassword.value.trim() === "") {
        // alert("password dalo")
        Swal.fire({
            icon: "error",
            title: "Plzz write the password ",
        });
    }
    else {
        passwordstring = JSON.stringify(signuppassword.value)
        localStorage.setItem("password", passwordstring)
        console.log(passwordstring)
    }
    // userName.value ="";
    // email.value = "";
    // password.value =  "";

    if (signupuserName.value && signupemail.value && signuppassword.value) {
        // alert(" hogya login")
        Swal.fire({
            icon: "success",
            title: "Your Sign up has been saved",
        });
        loginparent.style.display = "block";
        loginparent.style.display = "flex";
        signupparent.style.display = "none";
    }
}


var loginusername = document.getElementById("login-userName");
var loginemail = document.getElementById("login-email");
var loginpassword = document.getElementById("login-password");

function logindatasave() {
    var userNameparse = JSON.parse(localStorage.getItem("username"));
    console.log(userNameparse)
    var emailparse = JSON.parse(localStorage.getItem("email"));
    console.log(emailparse)
    var passwordparse = JSON.parse(localStorage.getItem("password"));
    console.log(passwordparse)
    if (loginusername.value === userNameparse) {
        // alert("username verify")
    }
    else {
        Swal.fire({
            icon: "error",
            title: "u didn't write correct the username ",
        });
    }
    if (loginemail.value === emailparse) {
        // alert("email verify")
    }
    else {
        Swal.fire({
            icon: "error",
            title: "u didn't write correct the email ",
        });
    }
    if (loginpassword.value === passwordparse) {
        // alert("password verify")
    }
    else {
        Swal.fire({
            icon: "error",
            title: "u didn't write correct the Password ",
        });
    }
    if (loginusername.value === userNameparse && loginemail.value === emailparse) {
        console.log(loginusername)
        if (loginpassword === passwordparse) {
            Swal.fire({
                icon: "success",
                title: "Login successfully",

            });
        }
        setTimeout(function () { window.location.href = "./post.html" }, 1000)
    }

}

function logoutdata() {
    setTimeout(function () { window.location.href = "./index.html" }, 1000)
}
