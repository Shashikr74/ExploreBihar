document.getElementById("vehicleForm").addEventListener("submit", function(e){
    e.preventDefault();

    const booking = {
        type: "Vehicle",
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        date: document.getElementById("date").value,
        status: "Pending"
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("msg").innerText = "✅ Vehicle booked successfully!";
    this.reset();
});
document.getElementById("vehicleForm").addEventListener("submit", function (e) {
    e.preventDefault();

    window.location.href = "choose-location.html";
});
