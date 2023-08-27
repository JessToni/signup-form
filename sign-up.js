document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm");

    let error = document.querySelector(".error");

    document.addEventListener("input", function () {
        if ((password.value == "" && confirmPassword.value == "") || password.value !== confirmPassword.value) {
            error.textContent = "* Passswords do not match";
        } else {
            error.textContent = "";
        }
    })
})