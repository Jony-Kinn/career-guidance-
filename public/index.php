<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Guidance Platform - Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    

    <!-- Login Form Container -->
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="role">Login as:</label>
            <select id="role" name="role" required>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="institute">Institute</option>
            </select>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="studentRegistration.php">Register here</a></p>
    </div>

    <!-- Place script at the end of body -->
    <script src="script.js"></script> 
</body>
</html>
