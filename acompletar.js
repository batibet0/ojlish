const questions = [
    { question: "The ________ is a mammal that lives in the ocean.", options: ["dolphin", "cat", "dog", "rabbit"], correctAnswer: 0 },
    { question: "I really like the ________ in winter.", options: ["heat", "cold", "wind", "sun"], correctAnswer: 1 },
    { question: "The ________ is the capital of France.", options: ["Madrid", "Paris", "Rome", "London"], correctAnswer: 1 },
    { question: "There are many ________ playing in the park.", options: ["children", "dogs", "trees", "cars"], correctAnswer: 0 },
    { question: "The ________ is a marine mammal.", options: ["shark", "whale", "dolphin", "penguin"], correctAnswer: 1 },
    { question: "I like ________ chocolate in the summer.", options: ["ice cream", "cake", "bread", "tea"], correctAnswer: 0 },
    { question: "The ________ lives in the Amazon rainforest.", options: ["lion", "bird", "tiger", "monkey"], correctAnswer: 3 },
    { question: "The ________ is very refreshing in summer.", options: ["water", "heat", "cold", "wind"], correctAnswer: 0 },
    { question: "The ________ is very close to my house.", options: ["beach", "mountain", "school", "city"], correctAnswer: 2 },
    { question: "The ________ is an animal that has wings.", options: ["bird", "cat", "dog", "rabbit"], correctAnswer: 0 },
    { question: "The ________ is full of books and magazines.", options: ["supermarket", "museum", "library", "cinema"], correctAnswer: 2 },
    { question: "The ________ of the food is very important.", options: ["taste", "color", "size", "price"], correctAnswer: 0 },
    { question: "I bought a new ________ of clothes.", options: ["shirt", "ball", "computer", "shoe"], correctAnswer: 0 },
    { question: "My ________ is very kind and always helps me.", options: ["mother", "sister", "friend", "grandmother"], correctAnswer: 0 },
    { question: "The ________ of the movie is very exciting.", options: ["ending", "beginning", "middle", "scene"], correctAnswer: 0 }
];


// Función para barajar las opciones de respuesta de cada pregunta
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Modificar la lista de preguntas para mezclar las opciones
questions.forEach(question => shuffleOptions(question.options));

const totalQuestions = questions.length;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let answeredQuestions = 0;
let timer = 60;

function startTimer() {
    const interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        } else {
            clearInterval(interval);
            endGameTimeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    document.getElementById("timer").innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const options = document.getElementById("options");
    options.innerHTML = ""; // Limpiar las opciones anteriores

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        options.appendChild(button);
    });

    document.getElementById("questionCount").innerText = `Preguntas: ${answeredQuestions + 1} / ${totalQuestions}`;
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedIndex === correctAnswer) {
        correctAnswers++;
    }
    answeredQuestions++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGameSuccess();
    }
}

function endGameSuccess() {
    showEndMessage(`¡Felicitaciones, has terminado el juego!`, `Respuestas correctas: ${correctAnswers} de ${totalQuestions}`);
}

function endGameTimeOut() {
    showEndMessage(`¡El tiempo ha terminado!`, `Respuestas correctas: ${correctAnswers} de ${answeredQuestions}`);
}

function showEndMessage(message, results) {
    document.getElementById("endMessage").style.display = "block";
    document.getElementById("finalMessage").innerText = message;
    document.getElementById("answeredQuestions").innerText = results;
}

function goToMenu() {
    // Redirige al menú (reemplaza con la URL de tu menú real)
    window.location.href = "menu.html";
}

function restartGame() {
    location.reload();
}

function initializeGame() {
    loadQuestion();
    startTimer();
    document.querySelector(".loading-screen").style.display = "none"; // Ocultar pantalla de carga
}

initializeGame();
