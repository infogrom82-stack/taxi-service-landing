document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const pickup = document.getElementById('pickup').value;
        const destination = document.getElementById('destination').value;

        alert(`Thank you, ${name}! Your request for a ride from ${pickup} to ${destination} has been received. We will contact you at ${phone} or ${email}.`);

        bookingForm.reset();
    });
});
