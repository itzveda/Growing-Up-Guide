const quizData = [
  {
    question: "At what age do girls usually start puberty?",
    options: ["6-8", "8-13", "10-15"],
    answer: "8-13"
  },
  {
    question: "Which hormone is responsible for boys' voice changes duirng puberty?",
    options: ["Estrogen", "Testosterone", "Progesterone"],
    answer: "Testosterone"
  },
  {
    question: "What is a wet dream?",
    options: ["A daydream about swimming", "An unexpected release of sperm while sleeping", "A type of physical exercise"],
    answer: "An unexpected release of sperm while sleeping"
  },
  {
    question: "What happens to girls during periods?",
    options: ["They grow taller", "They release blood from the uterus", "They develop deeper voices"],
    answer: "They release blood from the uterus"
  },
  {
    question: "What changes may girls see in their breasts during puberty?",
    options: ["Breasts will shrink", "No change", "Change in shape and size"],
    answer: "Change in shape and size"
  },
];
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quiz = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
  <h6>Quiz Completed! Ka Pai!</h6>
  <p>Your score: ${score}/${quizData.length}</p>
  <p>Refresh the page to try again!!</p>
  `;
}

showQuestion();
