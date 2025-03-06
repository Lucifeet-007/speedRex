function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if (username === "" || password === "") {
        errorMsg.textContent = "Please fill in all fields";
    } else {
        errorMsg.textContent = "";
        alert("Login successful");
    }
}
