// EmailJS
emailjs.init({
    publicKey: "4UuJ22QkwVbB_20ov"
});

// Mobile menu
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_mcvp67x",
        "template_pwda13t",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }).catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });
});
