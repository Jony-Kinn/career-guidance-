document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const role = document.getElementById("role").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Ensure all fields are filled
            if (!role || !email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            // Redirect based on selected role
            if (role === "admin") {
                window.location.href = "admin.php"; // Redirect to admin page
            } else if (role === "student") {
                window.location.href = "apply.php"; // Redirect to student page
            } else if (role === "institute") {
                window.location.href = "institute.php"; // Redirect to institute page
            } else {
                alert("Please select a valid role.");
            }
        });
    } else {
        console.error("Login form not found");
    }
});
