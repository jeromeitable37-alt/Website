/* ================= ADMIN CREDENTIALS ================= */
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

/* ================= REGISTER ================= */
function register() {
    const user = document.getElementById("newUsername").value;
    const pass = document.getElementById("newPassword").value;

    if (user === "" || pass === "") {
        alert("Please fill in all fields");
        return;
    }

    // Prevent creating admin account
    if (user === ADMIN_USERNAME) {
        alert("This username is reserved.");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created successfully!");
    window.location.href = "login.html";
}

/* ================= LOGIN ================= */
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    /* ADMIN LOGIN */
    if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
        return;
    }

    /* USER LOGIN */
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("role", "user");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

/* ================= LOGOUT ================= */
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
