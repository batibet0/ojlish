const questions = [
    { question: "What is the translation of 'gato' in English?", options: ["Dog", "Cat", "Bird", "Mouse"], correctAnswer: 1 },
    { question: "How do you say 'gracias' in English?", options: ["Thank you", "Please", "Goodbye", "Excuse me"], correctAnswer: 0 },
    { question: "Which is the correct translation for 'libro'?", options: ["Book", "Pen", "Pencil", "Eraser"], correctAnswer: 0 },
    { question: "What is the English word for 'feliz'?", options: ["Happy", "Sad", "Angry", "Tired"], correctAnswer: 0 },
    { question: "What is the opposite of 'old'?", options: ["Young", "Big", "Tall", "Small"], correctAnswer: 0 },
    { question: "How do you say 'casa' in English?", options: ["House", "Car", "School", "Room"], correctAnswer: 0 },
    { question: "Which one means 'agua' in English?", options: ["Water", "Milk", "Coffee", "Juice"], correctAnswer: 0 },
    { question: "What is the English translation of 'rojo'?", options: ["Red", "Blue", "Yellow", "Green"], correctAnswer: 0 },
    { question: "What does 'manzana' mean in English?", options: ["Apple", "Banana", "Orange", "Grape"], correctAnswer: 0 },
    { question: "What is the English word for 'amigo'?", options: ["Friend", "Enemy", "Teacher", "Stranger"], correctAnswer: 0 },
    { question: "What does 'perro' mean in English?", options: ["Dog", "Cat", "Bird", "Horse"], correctAnswer: 0 },
    { question: "What is the English translation of 'ciudad'?", options: ["City", "Town", "Village", "Street"], correctAnswer: 0 },
    { question: "What does 'ventana' mean in English?", options: ["Window", "Door", "Table", "Chair"], correctAnswer: 0 },
    { question: "How do you say 'feliz cumpleaños' in English?", options: ["Happy birthday", "Merry Christmas", "Good morning", "Hello"], correctAnswer: 0 },
    { question: "What is the translation of 'tren'?", options: ["Train", "Bus", "Car", "Plane"], correctAnswer: 0 },
    { question: "Which one means 'escuela' in English?", options: ["School", "Work", "Shop", "Library"], correctAnswer: 0 },
    { question: "How do you say 'mesa' in English?", options: ["Table", "Chair", "Couch", "Bed"], correctAnswer: 0 },
    { question: "What is the opposite of 'big'?", options: ["Small", "Tall", "Short", "Long"], correctAnswer: 0 },
    { question: "What is the English word for 'rojo'?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: 0 },
    { question: "How do you say 'grande' in English?", options: ["Big", "Small", "Tall", "Little"], correctAnswer: 0 },
    { question: "What is the English word for 'zapato'?", options: ["Shoe", "Hat", "Shirt", "Pants"], correctAnswer: 0 },
    { question: "What is the translation of 'agosto'?", options: ["August", "January", "December", "March"], correctAnswer: 0 },
    { question: "How do you say 'cielo' in English?", options: ["Sky", "Ocean", "Mountain", "Forest"], correctAnswer: 0 },
    { question: "What is the opposite of 'frío'?", options: ["Hot", "Cold", "Warm", "Cool"], correctAnswer: 0 },
    { question: "Which one means 'hermano' in English?", options: ["Brother", "Sister", "Friend", "Mother"], correctAnswer: 0 },
    { question: "How do you say 'rojo' in English?", options: ["Red", "Blue", "Yellow", "Pink"], correctAnswer: 0 },
    { question: "What is the translation of 'sol'?", options: ["Sun", "Moon", "Star", "Cloud"], correctAnswer: 0 },
    { question: "What does 'biblioteca' mean in English?", options: ["Library", "Bookstore", "School", "Museum"], correctAnswer: 0 },
    { question: "What is the English word for 'niño'?", options: ["Child", "Teen", "Adult", "Baby"], correctAnswer: 0 },
    { question: "What does 'familia' mean in English?", options: ["Family", "Friends", "School", "Work"], correctAnswer: 0 },
    { question: "How do you say 'rojo' in English?", options: ["Red", "Blue", "Yellow", "Green"], correctAnswer: 0 },
    { question: "What is the translation of 'árbol'?", options: ["Tree", "Bush", "Flower", "Plant"], correctAnswer: 0 },
    { question: "What is the English word for 'día'?", options: ["Day", "Night", "Morning", "Evening"], correctAnswer: 0 },
    { question: "How do you say 'mañana' in English?", options: ["Morning", "Night", "Afternoon", "Day"], correctAnswer: 0 },
    { question: "What does 'rojo' mean in English?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: 0 },
    { question: "What is the opposite of 'feliz'?", options: ["Sad", "Happy", "Tired", "Angry"], correctAnswer: 0 },
    { question: "How do you say 'libro' in English?", options: ["Book", "Pen", "Notebook", "Pencil"], correctAnswer: 0 },
    { question: "What does 'ventana' mean in English?", options: ["Window", "Door", "Wall", "Ceiling"], correctAnswer: 0 },
    { question: "What is the translation of 'fruta'?", options: ["Fruit", "Vegetable", "Meat", "Grain"], correctAnswer: 0 },
    { question: "How do you say 'tarde' in English?", options: ["Afternoon", "Morning", "Evening", "Night"], correctAnswer: 0 },
    { question: "What is the English translation of 'niña'?", options: ["Girl", "Boy", "Woman", "Man"], correctAnswer: 0 },
    { question: "What is the opposite of 'alto'?", options: ["Short", "Tall", "Big", "Little"], correctAnswer: 0 },
    { question: "What is the English word for 'pelota'?", options: ["Ball", "Toy", "Book", "Game"], correctAnswer: 0 },
    { question: "How do you say 'piedra' in English?", options: ["Stone", "Rock", "Water", "Tree"], correctAnswer: 0 },
    { question: "What is the translation of 'camisa'?", options: ["Shirt", "Pants", "Jacket", "Socks"], correctAnswer: 0 },
    { question: "What does 'playa' mean in English?", options: ["Beach", "Mountain", "River", "Forest"], correctAnswer: 0 },
    { question: "What is the English word for 'zapatos'?", options: ["Shoes", "Socks", "Boots", "Slippers"], correctAnswer: 0 },
    { question: "How do you say 'mar' in English?", options: ["Sea", "Lake", "Ocean", "River"], correctAnswer: 0 },
    { question: "What is the opposite of 'rico'?", options: ["Poor", "Rich", "Nice", "Kind"], correctAnswer: 0 },
    { question: "What does 'calor' mean in English?", options: ["Heat", "Cold", "Wind", "Rain"], correctAnswer: 0 },
    { question: "What is the English translation of 'coche'?", options: ["Car", "Truck", "Bus", "Bike"], correctAnswer: 0 },
    { question: "How do you say 'agua' in English?", options: ["Water", "Milk", "Coffee", "Tea"], correctAnswer: 0 },
    { question: "What is the English word for 'reloj'?", options: ["Watch", "Phone", "Computer", "Clock"], correctAnswer: 0 }
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

    document.getElementById("questionCount").innerText = `Preguntas: ${answeredQuestions} / ${totalQuestions}`;
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
}

initializeGame();
