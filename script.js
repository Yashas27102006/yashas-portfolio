// Mobile menu
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Contact form
emailjs.init({
    publicKey: "4UuJ22QkwVbB_20ov"
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_mcvp67x",
        "template_pwda13t",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
    });
});
