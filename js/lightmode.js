let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('theme-switch');
const videoLight = document.getElementById('video-light');
const videoDark = document.getElementById('video-dark');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    videoDark.style.display = 'block';
    videoLight.style.display = 'none';
    videoDark.play();  // Forzar reproducción
    videoLight.pause(); // Detener el video claro
    localStorage.setItem('darkMode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    videoLight.style.display = 'block';
    videoDark.style.display = 'none';
    videoLight.play();  // Forzar reproducción
    videoDark.pause();  // Detener el video oscuro
    localStorage.setItem('darkMode', null);
}

// Comprobar el modo de tema al cargar la página
if (darkMode === 'active') {
    enableDarkMode();
} else {
    disableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});

// Forzar la reproducción cuando la página se carga
window.addEventListener('DOMContentLoaded', () => {
    darkMode === 'active' ? videoDark.play() : videoLight.play();
});