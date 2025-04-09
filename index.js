document.addEventListener("DOMContentLoaded", function () {
    let name = ", I'm Meet";
  
    const typed = new Typed("#typed", {
      strings: [
        `Hi 👋  ${name}`,
        `Bonjour 👋  ${name}`,
        `Hola 👋  ${name}`,
        `Hallo 👋  ${name}`,
        `Ciao 👋  ${name}`,
        `Namaste 🙏  ${name}`,
        `Salaam 👋  ${name}`,
        `Konnichiwa 👋  ${name}`,
        `Olá 👋  ${name}`
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
  });
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#00f2ff" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: {enable: true, mode :"push"}
      }
    }
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        emailjs.sendForm('service_06vvudf', 'template_87zjl89', this)
          .then(() => {
            alert("Message sent successfully! ✅");
          }, (error) => {
            alert("Failed to send message ❌\n" + JSON.stringify(error));
          });
      });
    }
  });
  