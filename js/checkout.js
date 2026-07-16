import { courses } from "../data/script.js";

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

// រក Course តាម id
const course = courses.find(item => item.id === id);

if (!course) {
    document.body.innerHTML = `
        <div>
            <h1>Course Not Found</h1>
            <p>មិនមានវគ្គសិក្សានេះទេ</p>
        </div>
    `;
} else {
    // បង្ហាញ Data
    document.getElementById("courseImage").src = course.image;
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseCategory").textContent = course.categoryKh;
    document.getElementById("coursePrice").textContent = `$${course.price}`;
    document.getElementById("courseTotal").textContent = `$${course.price}`;
}
// Payment

const payBtn = document.getElementById("payBtn");
const message = document.getElementById("message");

payBtn.addEventListener("click", () => {
    localStorage.setItem("isPurchased", "true");
    message.textContent = "✅ បង់ប្រាក់ជោគជ័យ";
    setTimeout(() => {
        window.location.href =
            `../html/learn.html?id=${course.id}`;
    }, 1500);
});