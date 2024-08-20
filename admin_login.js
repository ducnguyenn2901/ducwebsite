function checklogin() {
    var matchUsername = document.getElementById("username").value
    var matchPassword = document.getElementById("mypassword").value
    if (matchPassword == "" && matchUsername == "") {
        document.getElementById("err_user").innerHTML = "Input Username"
        document.getElementById("err_pass").innerHTML = "Input Password"
        document.getElementById("err").innerHTML = ""
    }
    else if (matchUsername == "") {
        document.getElementById("err_user").innerHTML = "Input Username"
        document.getElementById("err_pass").innerHTML = ""
    }
    else if (matchPassword == "") {
        document.getElementById("err_pass").innerHTML = "Input Password"
        document.getElementById("err").innerHTML = ""
        document.getElementById("err_user").innerHTML = ""
    }

    else if (matchUsername == "admin" && matchPassword == "admin@123") {
        window.location.assign("admin.html")
        document.getElementById("err").innerHTML = ""
        document.getElementById("err_pass").innerHTML = ""
        document.getElementById("err_user").innerHTML = ""
    }
    else if (matchUsername == "guest" && matchPassword == "guest@123") {
        window.location.assign("customer.html")
        document.getElementById("err").innerHTML = ""
        document.getElementById("err_pass").innerHTML = ""
        document.getElementById("err_user").innerHTML = ""
    }
    else if (matchUsername != "admin" || matchPassword != "admin@123" || matchUsername != "guest" || matchPassword != "guest@123") {
        document.getElementById("err").innerHTML = "Invalid Username or Password"
        document.getElementById("err_pass").innerHTML = ""
        document.getElementById("err_user").innerHTML = ""
    }
}
function showPassword() {
    var check = document.getElementById("mypassword");
    if (check.type === "password") {
        check.type = "text";
    } else {
        check.type = "password";
    }
}
