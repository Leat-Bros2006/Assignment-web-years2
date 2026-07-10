import { courses } from "../data/script.js";
document.addEventListener("DOMContentLoaded", () => {
    // Get course id from URL
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    // Find course
    const course = courses.find(item => item.id === id);
    // Check course
    if (!course) {
        document.body.innerHTML = `
            <div class="not-found">
                <h1>Course Not Found</h1>
                <p>សូមត្រឡប់ទៅស្វែងរកវគ្គសិក្សាម្តងទៀត!</p>
            </div>
        `;
        return;
    }
    // Render detail
    renderCourseDetail(course);
});

// Function render detail
function renderCourseDetail(course) {
    document.getElementById("image").src = course.image;
    document.getElementById("title").textContent = course.title;
    document.getElementById("titleKh").textContent = course.titleKh;
    document.getElementById("category").textContent = course.categoryKh;
    document.getElementById("rating").textContent = `⭐ ${course.rating}`;
    document.getElementById("students").textContent = `👨‍🎓 ${course.students}`;
    document.getElementById("duration").textContent = course.duration;
    document.getElementById("level").textContent = course.levelKh;
    document.getElementById("price").textContent = `$${course.price}`;
}

// ============== Enrol Course ==============
let enrolBtn = document.getElementById("enrollBtn")

enrolBtn.addEventListener("click", () => {
    const user = localStorage.getItem("isLogin")
    if (user) {
        alert("អាចចូលរៀនបាន")
        window.location.href = "../html/learn.html"
    } else {
        window.location.href = "../html/login.html"
    }
})