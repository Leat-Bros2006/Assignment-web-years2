import { courses } from "../data/script.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// Find course
const course = courses.find(item => item.id === id);

if (!course) {
    document.body.innerHTML = `
        <div>
            <h1>Course Not Found</h1>
            <p style="text-align:center;">មិនមានវគ្គសិក្សានេះទេ</p>
        </div>
    `;
} else {
    // Show course data
    document.getElementById("courseImage").src = course.image;
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseCategory").textContent = course.categoryKh;
    document.getElementById("coursePrice").textContent = `$${course.price}`;
    document.getElementById("courseTotal").textContent = `$${course.price}`;

    // Payment
    const payBtn = document.getElementById("payBtn");
    const message = document.getElementById("message");

    payBtn.addEventListener("click", () => {

        // Get purchased courses
        let purchasedCourses =
            JSON.parse(localStorage.getItem("purchasedCourses")) || [];

        // Add course if not already purchased
        if (!purchasedCourses.includes(course.id)) {
            purchasedCourses.push(course.id);
        }

        // Save purchased courses
        localStorage.setItem(
            "purchasedCourses",
            JSON.stringify(purchasedCourses)
        );

        // Success message
        message.textContent = "✅ បង់ប្រាក់ជោគជ័យ";
        message.style.display = "block";
        message.style.marginTop = "15px";

        // Go to learn page
        setTimeout(() => {
            window.location.href = `../html/learn.html?id=${course.id}`;
        }, 1500);
    });
}