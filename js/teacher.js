import { experience, profile, skills } from '../data/teacher.js'

// ===== get selectors =====
let stats = document.querySelector(".stats")
let badges = document.querySelector(".badges")
let timeline = document.querySelector(".timeline")

// ===== Render Profile =====
document.addEventListener("DOMContentLoaded", () =>{
    let result = profile.map((item) =>{
        return `
            <div>
                <strong>${item.credit}+</strong>
                <span>${item.type}</span>
            </div>
        `
    }).join("")

    stats.innerHTML = result;
})

// ===== Render skills =====
document.addEventListener("DOMContentLoaded", () =>{
    let result = skills.map((item) =>{
        return `
            <span>${item}</span>
        `
    }).join("")

    badges.innerHTML = result
})

// ===== Render experience =====
document.addEventListener("DOMContentLoaded", () =>{
    let result = experience.map((item) =>{
        return `
            <div class="item">
                <b>${item.years}</b>
                <p>${item.des}</p>
            </div>
        `
    }).join("")

    timeline.innerHTML = result

})





