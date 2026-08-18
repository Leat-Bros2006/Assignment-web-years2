import { courses } from "../data/script.js";

// 1. Get purchased courses
const purchasedCourses =
    JSON.parse(localStorage.getItem("purchasedCourses")) || [];

// 2. Get container
const myCourses = document.getElementById("myCourses");

// 3. Check if user has no courses
if (purchasedCourses.length === 0) {

    myCourses.innerHTML = `
        <div class="empty-courses">
            <h3>មិនទាន់មានវគ្គសិក្សាទេ</h3>
            <p>សូមទិញវគ្គសិក្សាមួយ ដើម្បីចាប់ផ្តើមរៀន។</p>

            <a href="courses.html">
                មើលវគ្គសិក្សា
            </a>
        </div>
    `;

} else {

    // 4. Find purchased courses
    const myPurchasedCourses = courses.filter(course =>
        purchasedCourses.includes(course.id)
    );

    // 5. Display courses
    myCourses.innerHTML = myPurchasedCourses.map(course => {
        return `
            <div class="course-card">
                <img 
                    src="${course.image}" 
                    alt="${course.title}"
                >
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <p>${course.categoryKh}</p>
                    <a 
                        href="learn.html?id=${course.id}"
                        class="continue-btn"
                    >
                        រៀនបន្ត →
                    </a>
                </div>
            </div>
        `;
    }).join("");
}