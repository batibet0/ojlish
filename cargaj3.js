document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");

    // Configuración del progreso
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Redirige después de un pequeño retraso para suavizar la transición
            setTimeout(() => {
                window.location.href = "acompletar.html"; // Redirige a la página del juego
            }, 500); // 500ms de retraso antes de redirigir
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 80); // 80ms por incremento, alcanzando 100% en 8 segundos
});
