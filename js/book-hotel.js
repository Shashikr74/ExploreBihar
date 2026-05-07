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
        type: "Hotel",
        name,
        email,
        mobile,
        city,
        date,
        travelers,
        status: "Confirmed"
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // ✅ CORRECT REDIRECT (no /city/)
    window.location.href = `hotel.html?city=${city}`;
}
