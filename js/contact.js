const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear old errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    // Name
    if (name === "") {
        document.getElementById("nameError").textContent =
            "សូមបញ្ចូលឈ្មោះ";
        isValid = false;
    }

    // Email
    if (email === "") {
        document.getElementById("emailError").textContent =
            "សូមបញ្ចូលអ៊ីមែល";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent =
            "អ៊ីមែលមិនត្រឹមត្រូវ";
        isValid = false;
    }

    // Message
    if (message === "") {
        document.getElementById("messageError").textContent =
            "សូមបញ្ចូលសារ";
        isValid = false;
    }

    // Stop if validation failed
    if (!isValid) {
        return;
    }

    // Create new message
    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toLocaleString()
    };

    // Get old messages
    const messages =
        JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Add new message
    messages.push(newMessage);

    // Save messages
    localStorage.setItem(
        "contactMessages",
        JSON.stringify(messages)
    );

    alert("ផ្ញើសារបានជោគជ័យ! 🎉");

    contactForm.reset();
});