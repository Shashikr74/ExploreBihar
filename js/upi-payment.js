function paymentDone(){

    // random 4 digit code
    const otp = Math.floor(1000 + Math.random() * 9000);

    alert("Your Payment Code is: " + otp);

    const userCode = prompt("Enter Payment Code");

    if(userCode == otp){
        alert("✅ Payment Successful!");

        // ===== MOVE DATA TO PAID BOOKINGS =====
        const booking = JSON.parse(localStorage.getItem("currentBooking"));

        let paid = JSON.parse(localStorage.getItem("paidBookings")) || [];
        paid.push({
            ...booking,
            paymentStatus: "Paid"
        });

        localStorage.setItem("paidBookings", JSON.stringify(paid));

        // remove temp booking
        localStorage.removeItem("currentBooking");

        // redirect (optional)
        window.location.href = "index.html";

    } else {
        alert("❌ Invalid Code. Payment Failed!");
    }
}
