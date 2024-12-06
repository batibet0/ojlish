const leftWords = [
    "Dog", "Cat", "House", "Car", "Book",
    "Chair", "Table", "Tree", "Water", "Sun"
];
const rightTranslations = [
    "Perro", "Gato", "Casa", "Coche", "Libro",
    "Silla", "Mesa", "Árbol", "Agua", "Sol"
];

let shuffledLeft = [];
let shuffledRight = [];
let selectedLeft = null;
let startTime = null;

// Shuffle function to randomize arrays
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initGame() {
    const leftButtonsContainer = document.getElementById("leftButtons");
    const rightButtonsContainer = document.getElementById("rightButtons");

    leftButtonsContainer.innerHTML = "";
    rightButtonsContainer.innerHTML = "";

    // Shuffle the words and translations
    shuffledLeft = shuffle([...leftWords]);
    shuffledRight = shuffle([...rightTranslations]);

    // Create buttons for left column
    shuffledLeft.forEach((word, index) => {
        const button = document.createElement("button");
        button.textContent = word;
        button.dataset.index = leftWords.indexOf(word); // Store original index
        button.onclick = () => selectLeftButton(button);
        leftButtonsContainer.appendChild(button);
    });

    // Create buttons for right column
    shuffledRight.forEach((translation, index) => {
        const button = document.createElement("button");
        button.textContent = translation;
        button.dataset.index = rightTranslations.indexOf(translation); // Store original index
        button.onclick = () => selectRightButton(button);
        rightButtonsContainer.appendChild(button);
    });

    startTime = Date.now();
}

function selectLeftButton(button) {
    if (selectedLeft) {
        selectedLeft.classList.remove("active");
    }
    selectedLeft = button;
    selectedLeft.classList.add("active");
}

function selectRightButton(button) {
    if (!selectedLeft) return;

    const leftIndex = parseInt(selectedLeft.dataset.index, 10);
    const rightIndex = parseInt(button.dataset.index, 10);

    if (leftIndex === rightIndex) {
        // Correct match
        selectedLeft.classList.add("correct");
        button.classList.add("correct");
        selectedLeft.disabled = true;
        button.disabled = true;
        selectedLeft = null;

        // Check if the game is complete
        if (document.querySelectorAll("button.correct").length === leftWords.length * 2) {
            endGame();
        }
    } else {
        // Incorrect match
        selectedLeft.classList.remove("active");
        selectedLeft = null;
    }
}

function endGame() {
    const endTime = Date.now();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

    document.getElementById("gameContainer").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("timeResult").textContent = `You completed the game in ${timeTaken} seconds!`;
}

function restartGame() {
    document.getElementById("gameContainer").classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
    initGame();
}

function goToMenu() {
    // Implement functionality to return to the menu
    alert("Returning to the menu...");
}

// Initialize the game
initGame();
