
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Simple validation (Replace with real authentication)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});