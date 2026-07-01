import { courses } from "./data.js";

// 1. Read URL
const params = new URLSearchParams(window.location.search);

// 2. Get id
const id = Number(params.get("id"));

// 3. Find Course
const course = courses.find(item => item.id === id);

// 4. If not found
if (!course) {
    document.body.innerHTML = `<h1>Course Not Found</h1>`;
    throw new Error("Course not found");
}

// 5. Render

document.getElementById("image").src = course.image;
document.getElementById("title").textContent = course.title;
document.getElementById("titleKh").textContent = course.titleKh;
document.getElementById("category").textContent = course.categoryKh;
document.getElementById("rating").textContent = course.rating;
document.getElementById("students").textContent = course.students;
document.getElementById("duration").textContent = course.duration;
document.getElementById("level").textContent = course.levelKh;
document.getElementById("price").textContent = course.price;