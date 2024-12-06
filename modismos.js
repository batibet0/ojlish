const questions = [
    { question: "¿Qué significa 'a caballo regalado'?", options: ["Don't look a gift horse in the mouth", "Look a gift horse in the mouth", "A gift for a friend", "Don't buy what you don't need"], correctAnswer: 0 },
    { question: "What does 'a bird in the hand is worth two in the bush' mean?", options: ["Más vale pájaro en mano que ciento volando", "El que mucho abarca poco aprieta", "Lo que se da no se quita", "Quien no arriesga no gana"], correctAnswer: 0 },
    { question: "¿Qué significa 'dar la talla'?", options: ["To meet expectations", "To grow up", "To give money", "To be generous"], correctAnswer: 0 },
    { question: "What does 'to break the ice' mean?", options: ["Romper el hielo", "Hacer de tripas corazón", "Echar agua al fuego", "Salir de casa"], correctAnswer: 0 },
    { question: "¿Qué significa 'estirar la pata'?", options: ["To die", "To relax", "To rest", "To sleep"], correctAnswer: 0 },
    { question: "What does 'to burn the midnight oil' mean?", options: ["Trabajar hasta tarde", "Dormir temprano", "Hacer las cosas con prisa", "Estar muy cansado"], correctAnswer: 0 },
    { question: "¿Qué significa 'no hay mal que por bien no venga'?", options: ["Every cloud has a silver lining", "Time heals all", "What goes around comes around", "No pain, no gain"], correctAnswer: 0 },
    { question: "What does 'it’s raining cats and dogs' mean?", options: ["Está lloviendo a cántaros", "Hace mucho calor", "Está nevando", "Hace mucho viento"], correctAnswer: 0 },
    { question: "¿Qué significa 'poner los puntos sobre las íes'?", options: ["To clarify things", "To make mistakes", "To be unclear", "To be straightforward"], correctAnswer: 0 },
    { question: "What does 'to put all your eggs in one basket' mean?", options: ["Poner todos los huevos en una sola canasta", "Dar todo lo que tienes", "Tomar decisiones arriesgadas", "Invertir en diferentes opciones"], correctAnswer: 0 },
    { question: "¿Qué significa 'quedarse de piedra'?", options: ["To be shocked", "To relax", "To get angry", "To feel happy"], correctAnswer: 0 },
    { question: "What does 'to make a mountain out of a molehill' mean?", options: ["Hacer una montaña de un grano de arena", "No hacer nada", "Exagerar un problema", "Tratar algo como muy importante"], correctAnswer: 0 },
    { question: "¿Qué significa 'sacar las castañas del fuego'?", options: ["To do the hard work for others", "To be lucky", "To cook food", "To protect someone"], correctAnswer: 0 },
    { question: "What does 'to throw in the towel' mean?", options: ["Tirar la toalla", "Luchar hasta el final", "Rendirse", "Estar cansado"], correctAnswer: 0 },
    { question: "¿Qué significa 'tener la sartén por el mango'?", options: ["To be in control", "To be weak", "To be poor", "To be scared"], correctAnswer: 0 },
    { question: "What does 'to read between the lines' mean?", options: ["Leer entre líneas", "Tomar todo al pie de la letra", "Escuchar atentamente", "No prestar atención"], correctAnswer: 0 },
    { question: "¿Qué significa 'tirar la toalla'?", options: ["To give up", "To fight", "To be strong", "To resist"], correctAnswer: 0 },
    { question: "What does 'to hit the nail on the head' mean?", options: ["Dar en el clavo", "No saber lo que pasa", "Hablar sin pensar", "Pedir ayuda"], correctAnswer: 0 },
    { question: "¿Qué significa 'ver los toros desde la barrera'?", options: ["To watch from a safe distance", "To face danger", "To give advice", "To take action"], correctAnswer: 0 },
    { question: "What does 'to cry over spilled milk' mean?", options: ["Llorar sobre la leche derramada", "Arrepentirse de algo", "Perder algo importante", "No darle importancia a los problemas"], correctAnswer: 0 },
    { question: "¿Qué significa 'hacer la vista gorda'?", options: ["To ignore something", "To observe carefully", "To act quickly", "To take control"], correctAnswer: 0 },
    { question: "What does 'to burn bridges' mean?", options: ["Quemar puentes", "Destruir relaciones", "Mantener buenos amigos", "Cerrar oportunidades"], correctAnswer: 0 },
    { question: "¿Qué significa 'más vale tarde que nunca'?", options: ["Better late than never", "Time flies", "You can't hurry things", "Everything in its time"], correctAnswer: 0 },
    { question: "What does 'to jump on the bandwagon' mean?", options: ["Subirse al carro", "Tomar el control", "Unirse a una moda", "Ser un líder"], correctAnswer: 0 },
    { question: "¿Qué significa 'no todo lo que brilla es oro'?", options: ["All that glitters is not gold", "A bird in the hand is worth two in the bush", "Don’t judge a book by its cover", "Time is money"], correctAnswer: 0 }
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
let timer = 180; // 3 minutos

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

function showEndMessage(message, finalMessage) {
    document.getElementById("finalMessage").innerText = message;
    document.getElementById("answeredQuestions").innerText = finalMessage;
    document.getElementById("endMessage").style.display = "block";
}

function goToMenu() {
    window.location.href = "index.html"; // Aquí se debe definir la ruta a tu menú principal
}

function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    answeredQuestions = 0;
    timer = 180;
    document.getElementById("endMessage").style.display = "none";
    loadQuestion();
}

window.onload = function() {
    startTimer();
    loadQuestion();
};
