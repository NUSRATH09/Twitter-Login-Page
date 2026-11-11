
/* =====================================
   1. GET HTML ELEMENTS
===================================== */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const errorMessage = document.getElementById("errorMessage");


/* =====================================
   2. SHOW / HIDE PASSWORD
===================================== */

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

    }

});


/* =====================================
   3. LOGIN FORM VALIDATION
===================================== */

loginForm.addEventListener("submit", function (event) {

    // Prevent page reload

    event.preventDefault();


    // Get input values

    const email = emailInput.value.trim();

    const password = passwordInput.value;


    // Check empty fields

    if (email === "" || password === "") {

        errorMessage.textContent =
            "Please fill in all the fields.";

        return;

    }


    // Check password length

    if (password.length < 6) {

        errorMessage.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    // Clear error message

    errorMessage.textContent = "";


    // Demo success message

    alert("Welcome to Tweetly! Login form submitted successfully.");

});


/* =====================================
   4. FORGOT PASSWORD
===================================== */

document.getElementById("forgotLink").addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        alert("Password recovery feature is coming soon!");

    }
);


/* =====================================
   5. SIGN UP
===================================== */

document.getElementById("signupLink").addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        alert("Welcome! Sign up page is coming soon!");

    }
);
