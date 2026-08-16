let get_form = document.getElementById("get_form");
let error = document.getElementById("error");
let success = document.getElementById("success");

get_form.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    let courseId = params.get("id");

    // បើ URL មិនមាន id
    // យកពី localStorage
    if (!courseId) {
        courseId = localStorage.getItem("pendingCourseId");
    }

    let user = JSON.parse(localStorage.getItem("user"));

    error.textContent = "";
    success.textContent = "";

    if (!user) {
        error.textContent = "សូមបង្កើតគណនីជាមុនសិន!";
        error.style.color = "red";
        return;
    }
    
    if (email === "" || password === "") {
        error.textContent = "Email ឬ Password មិនទាន់បំពេញ";
        error.style.color = "red";
        return;
    }

    // Login Success
    if (email === user.email && password === user.password) {
        success.textContent = "✅ Login ជោគជ័យ!";
        success.style.color = "green";
        // Save Login
        localStorage.setItem("isLogin", "true");

        setTimeout(() => {
            if (courseId) {
                // Login ពេល User ចង់ទិញ Course
                window.location.href =
                    `../html/checkout.html?id=${courseId}`;
            } else {

                // Login ធម្មតា
                window.location.href =
                    "../index.html";
            }
        }, 1500);
    } else {
        error.textContent =
            "Email ឬ Password មិនត្រឹមត្រូវ!";
        error.style.color = "red";
    }

});