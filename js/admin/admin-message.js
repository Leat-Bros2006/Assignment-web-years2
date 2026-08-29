// ======================================
// Protect Admin Page
// ======================================

const isAdmin =
    localStorage.getItem("isAdmin");

if (isAdmin !== "true") {

    window.location.href =
        "admin-login.html";

}


// ======================================
// Get Elements
// ======================================

const messageList =
    document.getElementById("messageList");

const empty =
    document.getElementById("empty");

const logoutBtn =
    document.getElementById("logoutBtn");


// ======================================
// Render Messages
// ======================================

function renderMessages() {

    const messages =
        JSON.parse(
            localStorage.getItem("contactMessages")
        ) || [];


    if (messages.length === 0) {

        messageList.innerHTML = "";

        empty.innerHTML =
            "មិនមានសារទេ";

        return;

    }


    empty.innerHTML = "";


    messageList.innerHTML =
        messages.map((item, index) => `

        <tr>

            <td>
                ${index + 1}
            </td>

            <td>
                ${item.name}
            </td>

            <td>
                ${item.email}
            </td>

            <td>
                ${item.message}
            </td>

            <td>
                ${item.date}
            </td>

            <td>
                <button
                    onclick="deleteMessage(${item.id})"
                >
                    Delete
                </button>

            </td>

        </tr>

    `).join("");

}


// ======================================
// Delete Message
// ======================================

function deleteMessage(id) {

    const messages =
        JSON.parse(
            localStorage.getItem("contactMessages")
        ) || [];


    const newMessages =
        messages.filter(
            item => item.id !== id
        );


    localStorage.setItem(
        "contactMessages",
        JSON.stringify(newMessages)
    );


    renderMessages();

}


// ======================================
// Logout
// ======================================

// logoutBtn.addEventListener("click", () => {
//     // Remove login information
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("adminUsername");
//     localStorage.removeItem("adminPassword");
//     // Go back to Login
//     window.location.href =
//         "admin-login.html";
// });


// ======================================
// Start
// ======================================

renderMessages();