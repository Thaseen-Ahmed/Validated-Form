

let username = document.getElementById("username");
let password = document.getElementById("password");
let access = 1;

function validateform() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "Username is Empty";
        access = 0;
    }
    else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "Username require min 3 char";
        access = 0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        access = 1;
    }

    if (password.value == "") {
        document.getElementById("passwordError").innerHTML = "Password is Empty";
        access = 0;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
        access = 1;
    }

    if (access) {
        return true;
    }
    else {
        return false;
    }

}

