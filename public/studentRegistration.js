// public/studentRegistration.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its ID
    const form = document.getElementById("registerForm");

    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
        // Prevent default form submission behavior (prevents page refresh)
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Log form data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Redirect to apply.html after logging data
        window.location.href = "apply.php";
    });
});
