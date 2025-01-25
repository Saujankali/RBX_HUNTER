document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect (Optional)
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});