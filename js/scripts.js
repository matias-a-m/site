document.body.classList.add("preload");

window.addEventListener("pageshow", (event) => {
  // Siempre animamos, incluso si viene del historial
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      document.body.classList.remove("preload");
    }
  });

  // Animaciones para el contenido
  gsap.from("h1", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from("h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from("h3, h4", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    stagger: 0.1
  });

  gsap.from("p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });

  gsap.from("ul li, ol li", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.6,
    ease: "power2.out",
    stagger: 0.05
  });

  gsap.from(".btn-primary", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    ease: "back.out(1.7)"
  });
});
