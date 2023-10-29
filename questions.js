// script.js
const questions = [
    {
        question: "Stolica Kongo?",
        options: ["Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D"],
        correctAnswer: 1, // Indeks poprawnej odpowiedzi (liczone od 0)
    },
    {
        question: "Pytanie 2?",
        options: ["Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D"],
        correctAnswer: 2,
    },
    {
        question: "Pytanie 3?",
        options: ["Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D"],
        correctAnswer: 0,
    },
    // Dodaj więcej pytań...
];

const questionHistory = [];
const userAnswers = [];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options-form");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const viewAnswersButton = document.getElementById("view-answers-button");
const retryButton = document.getElementById("retry-button");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", showNextQuestion);
viewAnswersButton.addEventListener("click", showAnswers);
retryButton.addEventListener("click", resetQuiz);


function startQuiz() {
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
    showQuestion(currentQuestionIndex);
    backButton.classList.add("hidden");
}

function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
    for (let i = 0; i < 4; i++) {
        document.getElementById(`label${i + 1}`).textContent = question.options[i];
    }
}

function showNextQuestion(e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Wybierz odpowiedź.");
        return;
    }

    const answer = parseInt(selectedOption.id.replace("option", "")) - 1;
    userAnswers[currentQuestionIndex] = answer;
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    questionHistory.push(currentQuestionIndex); // Dodaj bieżący indeks pytania do historii
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        backButton.classList.remove("hidden"); // Usuń klasę ukrytą, aby pokazać przycisk "Cofnij"
    } else {
        showResult();
    }

    selectedOption.checked = false;
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultElement.textContent = `${score} / ${questions.length} (${Math.floor((score / questions.length) * 100)}%)`;

    if (score / questions.length >= 0.75) {
        resultElement.innerHTML = `PASS - ${resultElement.textContent}`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = `FAIL - ${resultElement.textContent}`;
        resultElement.style.color = "red";
    }
}

let currentQuestionNumber = 0;

function showAnswers() {
    const answerStrings = questions.map((q, index) => {
        currentQuestionNumber = index + 1;
        const correctAnswer = q.options[q.correctAnswer];
        const userAnswerIndex = userAnswers[index]; // Pobierz indeks odpowiedzi użytkownika
        const userAnswer = q.options[userAnswerIndex]; // Pobierz odpowiedź użytkownika
        const isCorrect = userAnswerIndex === q.correctAnswer;

        // Ustaw kolor odpowiedzi użytkownika na zielony (poprawna) lub czerwony (niepoprawna)
        const userAnswerColor = isCorrect ? "green" : "red";

        return `<b>Pytanie ${currentQuestionNumber}:</b><br>Poprawna odpowiedź: <b> ${correctAnswer} </b> <br>Odpowiedź użytkownika: <b> <span style="color: ${userAnswerColor};">${userAnswer}</span></b><br>`;
    });

    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = "<b>Odpowiedzi:</b><br><br>" + answerStrings.join("<br>");

    answersContainer.style.display = "block";
}

function hideAnswers() {
    answersContainer.innerHTML = ""; // Usuń wyświetlone odpowiedzi
    answersContainer.style.display = "none";
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
    hideAnswers();
    questionHistory.length = 0

}


function goBack(e) {
    e.preventDefault();
    if (questionHistory.length > 0) {
        const lastQuestionIndex = questionHistory.pop();
        currentQuestionIndex = lastQuestionIndex;
        showQuestion(currentQuestionIndex);
    }

    if (questionHistory.length === 0) {
        backButton.classList.add("hidden");
    }

    // Przywróć wynik na podstawie obecnych odpowiedzi
    score = 0;
    for (let i = 0; i < questionHistory.length; i++) {
        const questionIndex = questionHistory[i];
        if (questions[questionIndex].correctAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }

    // Aktualizacja wyniku na bieżąco
    resultElement.textContent = `${score} / ${questionHistory.length} (${Math.floor((score / questionHistory.length) * 100)}%)`;

    if (score / questionHistory.length >= 0.75) {
        resultElement.innerHTML = `PASS - ${resultElement.textContent}`;
    } else {
        resultElement.innerHTML = `FAIL - ${resultElement.textContent}`;
    }
}


startQuiz();
