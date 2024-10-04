// Función para comprobar si un elemento es visible en el viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar la animación cuando la sección es visible
function showOnScroll() {
  const aboutSection = document.querySelector(".about-section");

  if (isElementInViewport(aboutSection)) {
    aboutSection.classList.add("show"); // Añadir clase 'show' cuando es visible
  }
}

// Escuchar el evento scroll y ejecutar la función showOnScroll
window.addEventListener("scroll", showOnScroll);

// Llamar la función al cargar la página para detectar si ya está visible
showOnScroll();

const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");

// Asegúrate de que esta función esté definida correctamente
function getCurrentVideo() {
  const videoLight = document.getElementById("video-light");
  const videoDark = document.getElementById("video-dark");

  if (document.body.classList.contains("darkmode")) {
    return videoDark; // Si está en modo oscuro
  } else {
    return videoLight; // Si está en modo claro
  }
}

playPauseButton.addEventListener("click", function () {
  const currentVideo = getCurrentVideo(); // Obtiene el video visible según el modo

  if (currentVideo.paused) {
    currentVideo.play(); // Reproduce el video
    playPauseIcon.classList.remove("bi-play-fill");
    playPauseIcon.classList.add("bi-pause-fill");
  } else {
    currentVideo.pause(); // Pausa el video
    playPauseIcon.classList.remove("bi-pause-fill");
    playPauseIcon.classList.add("bi-play-fill");
  }
});

