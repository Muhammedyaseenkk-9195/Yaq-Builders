document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("MppWYWxalG2_9uHkB"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Show loading
        document.querySelector(".loading").style.display = "block";

        // Send Email using EmailJS
        emailjs.send("service_5xlb41o", "template_tezguyv", {
            name: name,
            email: email,
            phone: phone,
            message: message
        }).then(function (response) {
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".sent-message").style.display = "block";
            document.querySelector(".error-message").style.display = "none";

            // Redirect to WhatsApp after email is sent
            let whatsappMsg = `Hello, my name is ${name}. My email is ${email} and phone number is ${phone}. Message: ${message}`;
            let whatsappLink = `https://wa.me/91 85903 47262?text=${encodeURIComponent(whatsappMsg)}`; // Replace with your WhatsApp number
            window.open(whatsappLink, "_blank");
        }, function (error) {
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".error-message").style.display = "block";
            document.querySelector(".sent-message").style.display = "none";
        });
    });
});
