const gameModesButton = document.getElementById("gameModesButton");
const backButton = document.getElementById("backButton");
const settingsButton = document.getElementById("settingsButton");
const mainButtons = document.getElementById("mainButtons");
const gameModes = document.getElementById("gameModes");

// Mostrar modos de juego con animación
gameModesButton.addEventListener("click", () => {
    mainButtons.classList.add("hidden");
    gameModes.classList.remove("hidden");
    gameModes.classList.add("fade-in");
});

// Botón de volver al índice
backButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

// Botón de configuración (mensaje temporal)
settingsButton.addEventListener("click", () => {
    alert("Configuración: Opciones aún no disponibles.");
});
document.getElementById('gameModesButton').addEventListener('click', function() {
    // Ocultar los botones principales
    document.getElementById('mainButtons').classList.add('hidden');
    
    // Mostrar los botones de modos de juegos
    document.getElementById('gameModes').classList.remove('hidden');
});

document.getElementById('mode5').addEventListener('click', function() {
    // Cerrar los botones de modos y volver a mostrar los botones principales
    document.getElementById('gameModes').classList.add('hidden');
    document.getElementById('mainButtons').classList.remove('hidden');
});
