const questions = [
    {
        question: "What is the primary function of the Central Processing Unit (CPU)?",
        answers: [
            { text: "A) To store data permanently", correct: false },
            { text: "B)To execute instructions", correct: true },
            { text: " C) To display graphics", correct: false },
            { text: "D) To manage network connections", correct: false },
        ],
    },
    {
        question: "Which of the following is a type of volatile memory?",
        answers: [
            { text: "A) ROM", correct: false },
            { text: "B) RAM", correct: true },
            { text: "C) SSD", correct: false },
            { text: " D) HDD", correct: false },
        ],
    },
    {
        question: "Which number system is primarily used in computer systems?",
        answers: [
            { text: "A) Binary", correct: true },
            { text: "B) Decimal", correct: false },
            { text: " C) Hexadecimal", correct: false },
            { text: "D) Octal", correct: false },
        ],
    },
    {
        question: "What does HTTP stand for in the context of web communication?",
        answers: [
            { text: "A) HyperText Transfer Protocol", correct: true },
            { text: "B) Hyperlink Text Protocol", correct: false },
            { text: "C) High Transfer Protocol", correct: false },
            { text: "D) Hyperlink Transfer Page", correct: false },
        ],
    },
    {
        question: "Which component converts digital signals into analog signals in a computer network?",
        answers: [
            { text: "A) Modem", correct: true },
            { text: "B) Router", correct: false },
            { text: "C) Switch", correct: false },
            { text: "D) Firewall", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-text");
    const answersContainer = document.querySelector(".answers");

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    answersContainer.innerHTML = ""; // Clear previous answers
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.onclick = () => checkAnswer(answer.correct ? "correct" : "wrong");
        answersContainer.appendChild(button);
    });
}

function checkAnswer(status) {
    if (status === "correct") {
        currentQuestionIndex++;
        if (currentQuestionIndex = questions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-container").innerHTML = "<h2>Quiz Completed!</h2>";
        }
    } else {
        alert("Wrong answer! Try again.");
    }
}

// Load the first question initially
loadQuestion();