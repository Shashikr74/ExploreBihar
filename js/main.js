// ===============================
// LOGIN CHECK
// ===============================
const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedUser) {
    window.location.href = "login.html";
}

// ===============================
// SHOW ONLY USERNAME (HEADER)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const userNameEl = document.getElementById("userName");
    if (userNameEl && loggedUser) {
        userNameEl.innerText = loggedUser.username || "User";
    }
});

// ===============================
// BOOK HOTEL (NO AUTO FILL AT ALL)
// ===============================
function bookHotel() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const travelers = document.getElementById("travelers").value;

    if (!name || !email || !mobile || !city || !date) {
        alert("Please fill all fields");
        return;
    }

    const booking = {
        name,
        email,
        mobile,
        city,
        date,
        travelers
    };

    // old admin / booking flow SAFE
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // redirect same as old logic
    window.location.href = `city/hotel.html?city=${city}`;
}

// ===============================
// LOGOUT
// ===============================
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
function bookTourGuide() {
    window.location.href = "book-tour-guide.html";
}
localStorage.setItem("currentBooking", JSON.stringify(booking));
window.location.href = "payment.html";





