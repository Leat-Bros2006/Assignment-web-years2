import { courses } from "../data/script.js";

// 1. Check payment
let isPurchased = localStorage.getItem("isPurchased");

if (isPurchased !== "true") {
    alert("សូមបង់ប្រាក់ជាមុនសិន!");
    window.location.href = "../html/checkout.html";
}

// 2. Get id from URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// 3. Find course
const course = courses.find(item => item.id === id);

// 4. Check course
if (!course) {
    document.body.innerHTML = `
        <div class="not-found">
            <h1>Course Not Found</h1>
            <p>មិនមានវគ្គសិក្សានេះទេ!</p>
        </div>
    `;
    throw new Error("Course Not Found");
}

// 5. Display course
document.getElementById("courseTitle").textContent = course.title;
document.getElementById("courseDescription").textContent = course.description

// បើអ្នកមាន video ក្នុង data
if (course.video) {
    document.getElementById("courseVideo").src = course.video;
}