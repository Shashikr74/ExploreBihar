document.getElementById("guideForm").addEventListener("submit", function(e){
    e.preventDefault();

    const booking = {
        type: "Tour Guide",
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        city: document.getElementById("city").value,
        language: document.getElementById("language").value,
        status: "Pending"
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("msg").innerText = "✅ Tour Guide booked successfully!";
    this.reset();
});
