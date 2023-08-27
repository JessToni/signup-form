document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm").value;

    let error = document.querySelector(".error");

    if ((password == "" && confirmPassword == "") || password != confirmPassword) {
        error.innerHTML = "* Passswords do not match";
    } else if (password == confirmPassword) {
        error.innerHTML = "";
    }
})