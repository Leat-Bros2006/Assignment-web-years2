// inport data

import { courses, whyStudy } from "./data.js";

// ================ Navbar Toggle ================
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("overlay");

    function closeMenu() {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        toggle.classList.remove("active");
    }

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});


// ====== Selectors================
let coursesGrid = document.querySelector(".courses-grid")
const searchInput = document.getElementById("search_course");
const priceSearch = document.getElementById("priceFilter")
const levelFilter = document.getElementById("levelFilter")
const whyGrid = document.querySelector(".why-grid")

const renderCourse = (dataCourse) => {
    if (dataCourse.length === 0) {
        coursesGrid.innerHTML = `
             <div style="height: 60vh">
                <p>មិនមានតម្លៃនេះទេ!</p>
                <p>សូមព្យាយាម​​ សាកល្បងស្វែងរកតម្លៃផ្សេងទៀត!</p>
             </div>
        `;
        return
    }

    let toHTML = dataCourse.map((items) => {
        return `
            <div class="course-card">
                <img src="${items.image}" alt="course">
                <div class="course-content">
                    <h3>${items.title}</h3>
                    <div class="meta">
                        <span>⭐ ${items.rating}</span>
                        <span>👨‍🎓 ${items.students}</span>
                    </div>
                    <p class="level">${items.levelKh}</p>
                    <div class="bottom">
                        <span class="price">$${items.price}</span>
                        <button onclick="viewDetail(${items.id})">មើលលម្អិត</button>
                    </div>
                </div>
            </div>
        `
    }).join("")

    coursesGrid.innerHTML = toHTML
}

renderCourse(courses)

// ========== Search by Title ==========
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    const filtered = courses.filter(course => {
        return course.title.toLowerCase().includes(keyword);
    });

    renderCourse(filtered);
})


// ========== Search by Price ==========
priceSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const inputValue = priceSearch.value.trim();
        const maxPrice = Number(priceSearch.value)

        const pushSearchToHTML = courses.filter(pri => {
            if (inputValue === "") return true;

            return pri.price === maxPrice
        })
        renderCourse(pushSearchToHTML)
    }

})

// ========== Filter by Level ==========
levelFilter.addEventListener("change", () => {
    const selectdLevel = levelFilter.value

    const filtered = courses.filter(course => {
        if (selectdLevel === "all") return true

        return course.level === selectdLevel;
    })


    renderCourse(filtered)
})

// ========== Product Detail ============
function viewDetail(id) {
    window.location.href = `detail.html?id=${id}`;
}

// ========== Render Why Study ========== 
document.addEventListener("DOMContentLoaded", () =>{
    let whyToHTML = whyStudy.map((item) =>{
        return `
            <div class="why-card">
                <h3>${item.title}</h3>
                <p>${item.des}</p>
            </div>
        `
    }).join("")

    whyGrid.innerHTML = whyToHTML

})

