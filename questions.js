// script.js
window.jsPDF = window.jspdf.jsPDF;
const questions = [
    {
        question: "Kiedy zostal uruchomiony pierwszy serwer WWW?",
        options: ["a) 1989", "b) 1990", "c) 1993", "d) 1995"],
        correctAnswer: 1, // Indeks poprawnej odpowiedzi (liczone od 0)
    },
    {
        question: "Kto uwazany jest za tworce World Wide Web?",
        options: ["a) Tim Cook", "b) Tim Berners-Lee", "c) Steve Jobs", "d) Mark Zuckerberg"],
        correctAnswer: 1, 
    },
    {
        question: "W ktorym roku pierwszy raz uzyto terminu Internet?",
        options: ["a) 1950", "b) 1969", "c) 1983", "d) 1995"],
        correctAnswer: 1, 
    },
    {
        question: "Co to jest ARPANET?",
        options: ["a) Pierwsza przegladarka internetowa", "b) Pierwsza siec komputerowa", "c) Pierwszy protokol HTTP", "d) Pierwszy komputer"],
        correctAnswer: 1,
    },
    {
        question: "Co oznacza skrot URL?",
        options: ["a) Unified Resource Locator", "b) Universal Resource Link", "c) Uniform Resource Locator", "d) Unique Resource Locator"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest DNS?",
        options: ["a) Dynamic Network Service", "b) Domain Name System", "c) Data Network Security", "d) Digital Naming Service"],
        correctAnswer: 1,
    },
    {
        question: "Co to jest IP address?",
        options: ["a) International Phone number", "b) Internet Protocol address", "c) Internal Port address", "d) Intranet Position address"],
        correctAnswer: 1,
    },
    {
        question: "Jakie urzadzenie umozliwia laczenie sie z Internetem bezprzewodowo?",
        options: ["a) Modem", "b) Router", "c) Switch", "d) Wi-Fi adapter"],
        correctAnswer: 3,
    },
    {
        question: "Jakie jezyki programowania sa wykorzystywane do tworzenia stron internetowych?",
        options: ["a) HTML, Python, C++", "b) CSS, Java, SQL", "c) HTML, CSS, JavaScript", "d) PHP, Ruby, Perl"],
        correctAnswer: 2,
    },
    {
        question: "Co oznacza skrót CSS w kontekscie tworzenia stron internetowych?",
        options: ["a) Cascading Style Sheets", "b) Centralized Style System", "c) Computerized Style Scripts", "d) Creative Styling Software"],
        correctAnswer: 0,
    },
    {
        question: "Ktory jezyk programowania jest uzywany do tworzenia interaktywnych elementow na stronach internetowych, takich jak formularze i gry?",
        options: ["a) HTML", "b) CSS", "c) JavaScript", "d) PHP"],
        correctAnswer: 2,
    },
    {
        question: "Jakie jest podstawowe zastosowanie jezyka CSS?",
        options: ["a) Tworzenie interaktywnych stron internetowych", "b) Okreslanie wygladu i stylu stron internetowych", "c) Zarzadzanie bazami danych", "d) Programowanie serwerow"],
        correctAnswer: 1,
    },
    {
        question: "Co oznacza skrot JS w kontekscie tworzenia stron internetowych?",
        options: ["a) Java Source", "b) Just Style", "c) JavaScript", "d) JSON Script"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest Tor?",
        options: ["a) Przegladarka internetowa", "b) Siec VPN", "c) Siec darknetowa", "d) Kryptowaluta"],
        correctAnswer: 2,
    },
    {
        question: "Jakie kryptowaluty sa czesto uzywane na darknecie?",
        options: ["a) Bitcoin, Ethereum, Litecoin", "b) Monero, Zcash, Dash", "c) Ripple, Stellar, Cardano", "d) Dogecoin, Polkadot, Chainlink"],
        correctAnswer: 1,
    },
    {
        question: "Co to jest phishing?",
        options: ["a) Atak polegajacy na przejmowaniu danych uzytkownika", "b) Rodzaj antywirusa", "c) Metoda tworzenia stron internetowych", "d) System zapobiegania atakom hakerskim"],
        correctAnswer: 0,
    },
    {
        question: "Co oznacza skrot VPN w kontekscie bezpieczenstwa internetowego?",
        options: ["a) Virtual Private Network", "b) Very Private Navigator", "c) Visual Protection Node", "d) Volatile Public Network"],
        correctAnswer: 0,
    },
    {
        question: "Co to jest Silk Road w kontekscie darknetu?",
        options: ["a) Zaszyfrowany protokol komunikacyjny", "b) Portal spolecznosciowy", "c) Strona handlowa na darknecie", "d) Przegladarka internetowa"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest atak DDoS?",
        options: ["a) Atak polegajacy na wlamywaniu sie do systemu", "b) Atak polegajacy na rozprzestrzenianiu wirusa", "c) Atak polegajacy na zablokowaniu dostepu do uslugi poprzez przeciazenie serwera", "d) Atak polegajacy na podszywaniu się pod innych uzytkownikow"],
        correctAnswer: 2,
    },
    {
        question: "Co oznacza skrot HTTPS w adresie URL?",
        options: ["a) Hyper Transfer Protocol Secure", "b) High Traffic Protection System", "c) Hyper Text Privacy Standard", "d) Hyper Text Transfer Protocol Secure"],
        correctAnswer: 3,
    },
    {
        question: "Która firma jest znana z rozwoju systemu operacyjnego Android?",
        options: ["a) Apple", "b) Microsoft", "c) Google", "d) Samsung"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest Internet of Things (IoT)?",
        options: ["a) Siec spolecznosciowa", "b) System operacyjny", "c) Koncepcja laczenia urzadzen do Internetu", "d) Rodzaj kryptowaluty"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest blockchain?",
        options: ["a) Technologia pozwalajaca na szybsze ladowanie stron internetowych", "b) Rozwiazanie do anonimowego przegladania internetu", "c) Rozproszona ksiega rachunkowa wykorzystywana w kryptowalutach", "d) Rodzaj przegladarki internetowej"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest sztuczna inteligencja (AI)?",
        options: ["a) Technologia polegajaca na łaczeniu komputerow w jedna siec", "b) Szybki transfer danych", "c) Technologia umozliwiajaca komputerom rozumienie i uczenie sie", "d) Skrot od Artefact Internet"],
        correctAnswer: 2,
    },
    {
        question: "Co to jest 5G?",
        options: ["a) Piata generacja przegladarek internetowych", "b) Piata generacja telefonii komorkowej", "c) Piata generacja systemow operacyjnych", "d) Maszty powodujace rozne schorzenia (peelna mooc)"],
        correctAnswer: 1,
    },

];

const questionHistory = [];
const userAnswers = [];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
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
viewAnswersButton.addEventListener("click", () => {
    quizContainer.style.height = "300vh";
});


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
    const questionNumberElement = document.getElementById("question-number");
    questionNumberElement.textContent = `Pytanie ${index + 1}`;
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

    questionHistory.push(currentQuestionIndex);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        backButton.classList.remove("hidden");
    } else {
        showResult();
    }

    selectedOption.checked = false;
}


function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
            score++;
        }
    }
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
    quizContainer.style.height = "100vh";

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
}



function generateCertificate() {
    const doc = new jsPDF();
    doc.setFontSize(19);
    doc.setFont("helvetica", "bold");
    doc.text("Certyfikat ukonczenia quizu o technologiach internetowych", 10, 20);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");

    const userScore = `${score} / ${questions.length} (${Math.floor((score / questions.length) * 100)}%)`;
    doc.text(`Wynik: ${userScore}`, 10, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    let yOffset = 60; // Początkowa pozycja dla pytań
    let questionsPerPage = 5; // Ilość pytań na jednej stronie
    let questionsCounter = 0; // Licznik pytań na obecnej stronie

    // Dodaj odpowiedzi użytkownika
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const userAnswerIndex = userAnswers[i];
        const userAnswer = question.options[userAnswerIndex];
        const isCorrect = userAnswerIndex === question.correctAnswer;
        const questionText = `Pytanie ${i + 1}: ${question.question}`;
        const userAnswerText = `Twoja odpowiedz: ${userAnswer}`;

        doc.text(questionText, 10, yOffset);
        yOffset += 10; // Zwiększ odstęp między pytaniem a odpowiedzią
        doc.text(userAnswerText, 10, yOffset);

        if (!isCorrect) {
            // Wyświetl poprawną odpowiedź tylko wtedy, gdy odpowiedź użytkownika jest nieprawidłowa
            const correctAnswer = question.options[question.correctAnswer];
            yOffset += 10; // Zwiększ odstęp między odpowiedzią użytkownika a poprawną odpowiedzią
            doc.text(`Poprawna odpowiedz: ${correctAnswer}`, 10, yOffset);
            yOffset += 10; // Zwiększ odstęp między poprawną odpowiedzią a następnym pytaniem
        } else {
            yOffset += 10; // Zwiększ odstęp między odpowiedzią użytkownika a następnym pytaniem (bez wyświetlania poprawnej odpowiedzi)
        }

        // Ustaw kolor wyniku na zielony (poprawna odpowiedź) lub czerwony (nieprawidłowa odpowiedź)
        if (isCorrect) {
            doc.setTextColor(0, 128, 0); // Zielony
        } else {
            doc.setTextColor(255, 0, 0); // Czerwony
        }

        doc.setFont("helvetica", "bold");
        doc.text(isCorrect ? "Poprawna odpowiedz" : "Nieprawidlowa odpowiedz", 10, yOffset);

        // Przywróć domyślny kolor tekstu
        doc.setTextColor(0);
        doc.setFont("helvetica", "normal");
        yOffset += 10; // Zwiększ ogólny odstęp między wynikami

        questionsCounter++;

        // Jeśli osiągnięto limit pytań na stronie, przejdź do nowej strony
        if (questionsCounter >= questionsPerPage && i < questions.length - 1) {
            doc.addPage();
            yOffset = 10; // Resetuj pozycję dla nowej strony
            questionsCounter = 0;
        }
    }

    // Zapisz PDF
    doc.save("certyfikat.pdf");
}

const downloadCertificateButton = document.getElementById("download-certificate-button");
downloadCertificateButton.addEventListener("click", generateCertificate);

startQuiz();
