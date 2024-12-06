const progressBar = document.getElementById("progressBar");

// Configuración del progreso
let width = 0;
const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);
        window.location.href = "menu.html"; // Redirige a menu.html
    } else {
        width++;
        progressBar.style.width = width + "%";
    }
}, 80); // 80ms por incremento = 8 segundos en total
