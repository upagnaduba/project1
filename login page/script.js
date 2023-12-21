const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required!";
    } else {
        // Here you can perform the login logic, e.g., sending a request to the server for authentication.
        // For this example, let's just show an alert indicating successful login.
        if(username.includes("22951A") && password=="qwertyuiop")
        {
            window.location.href = 'index1.html'
        }
        else{
            alert("wrong id or password")
        }
    }
});
