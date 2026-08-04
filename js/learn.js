let isPurchased = localStorage.getItem("isPurchased")

if (isPurchased !== "true") {
    window.location.href = "checkout.html"
}