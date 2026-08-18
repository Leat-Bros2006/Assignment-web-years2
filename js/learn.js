import { courses } from "../data/script.js";

// 1. Get course ID from URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// 2. Get purchased courses
let purchasedCourses =
    JSON.parse(localStorage.getItem("purchasedCourses")) || [];

// 3. Check if this course was purchased
if (!purchasedCourses.includes(id)) {
    alert("សូមបង់ប្រាក់ជាមុនសិន!");
    window.location.href = `checkout.html?id=${id}`;
    throw new Error("Course not purchased");
}

// 4. Find course
const course = courses.find(item => item.id === id);

// 5. Check course
if (!course) {
    document.body.innerHTML = `
        <div class="not-found">
            <h1>Course Not Found</h1>
            <p>មិនមានវគ្គសិក្សានេះទេ!</p>
        </div>
    `;
    throw new Error("Course Not Found");
}

// 6. Display course
document.getElementById("courseTitle").textContent = course.title;
document.getElementById("courseDescription").textContent = course.description;

// 7. Display video
if (course.video) {
    document.getElementById("courseVideo").src = course.video;
}