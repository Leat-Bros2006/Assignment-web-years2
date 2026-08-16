let registerForm = document.getElementById("registerForm")
let passwordError = document.getElementById("passwordError")
let successMessage = document.getElementById("successMessage")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value

    console.log(fullname, email, phone, password, confirmPassword)

    passwordError.textContent = "";

    // check field
    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        passwordError.textContent = "សូមបំពេញព័ត៌មានទាំងអស់!"
        passwordError.style.color = "red"
        return;
    }

    if (password !== confirmPassword) {
        passwordError.textContent = `Password មិនដូចគ្នា!`
        passwordError.style.color = "red"
        return;
    }

    let user = {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password,
    }

    localStorage.setItem("user", JSON.stringify(user))

    successMessage.textContent = "✅បង្កើតគណនីបានជោគជ័យ!";
    successMessage.style.color = "green";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
})