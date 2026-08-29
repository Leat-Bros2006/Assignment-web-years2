// ======================================
// Check if Admin is already logged in
// ======================================
const isAdmin = localStorage.getItem("isAdmin");

if (isAdmin === "true") {

    window.location.href = "admin-message.html";

}

// ======================================
// Get Form
// ======================================

const loginForm =
    document.getElementById("loginForm");

// ======================================
// Get Saved Username & Password
// ======================================

const savedUsername =
    localStorage.getItem("adminUsername");
const savedPassword =
    localStorage.getItem("adminPassword");

// ======================================
// Fill Saved Data
// ======================================
if (savedUsername) {
    document.getElementById("username").value =
        savedUsername;
}

if (savedPassword) {
    document.getElementById("password").value =
        savedPassword;
}

// ======================================
// Login
// ======================================

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const username =
        document.getElementById("username").value.trim();
    const password =
        document.getElementById("password").value.trim();

    // Clear old errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("loginError").textContent = "";

    // ======================================
    // Validation
    // ======================================
    let isValid = true;

    // Username
    if (username === "") {
        document.getElementById("usernameError").textContent =
            "សូមបញ្ចូល Username";
        isValid = false;
    }

    // Password
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "សូមបញ្ចូល Password";

        isValid = false;
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // ======================================
    // Admin Account
    // ======================================

    const adminUsername = "admin";
    const adminPassword = "123456";

    // ======================================
    // Check Login
    // ======================================

    if (
        username === adminUsername &&
        password === adminPassword
    ) {
        // Remember Admin
        localStorage.setItem(
            "isAdmin",
            "true"
        );

        // Remember Username
        localStorage.setItem(
            "adminUsername",
            username
        );

        // Remember Password
        localStorage.setItem(
            "adminPassword",
            password
        );
        // Go to Admin Page
        window.location.href =
            "admin-message.html";
    } else {
        document.getElementById("loginError").textContent =
            "Username ឬ Password មិនត្រឹមត្រូវ";
    }
});