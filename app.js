const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["foreign", "national", "ethnic"],
    options: ["mad", "exotic"],
    correct: 2,
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["forecast", "sustainable"],
    correct: 1,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["charity", "rapid"],
    correct: 2,
  },
  {
    quiz: ["increase", "extend", "expand"],
    options: ["reduce", "enlarge"],
    correct: 2,
  },
  {
    quiz: ["move", "progress", "develop"],
    options: ["coincide", "proceed"],
    correct: 2,
  },
];

let score = 0;
let clicked = [];
scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    const logoDisplay = document.createElement("h1");
    logoDisplay.textContent = "✍️";
    questionBox.append(logoDisplay);

    question.quiz.forEach((tip) => {
      const tipText = document.createElement("p");
      tipText.textContent = tip;
      questionBox.append(tipText);
    });

    const questionButtons = document.createElement("div");
    questionButtons.classList.add("question-buttons");
    questionBox.append(questionButtons);

    question.options.forEach((option, optionIndex) => {
      const optionButton = document.createElement("button");
      optionButton.classList.add("question-button");
      optionButton.textContent = option;

      optionButton.addEventListener("click", () =>
        checkAnswer(
          questionBox,
          optionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      );

      questionButtons.append(optionButton);
    });

    const answerDisplay = document.createElement("div");
    answerDisplay.classList.add("answer-display");

    questionBox.append(answerDisplay);
    questionDisplay.append(questionBox);
  });
}

populateQuestions();

function checkAnswer(
  questionBox,
  optionButton,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Correct!", "correct");
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Wrong!", "wrong");
  }
  clicked.push(option);
  optionButton.disabled = clicked.includes(option);
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector(".answer-display");
  answerDisplay.classList.add(className);
  answerDisplay.textContent = "";
  answerDisplay.textContent = answer;
}
