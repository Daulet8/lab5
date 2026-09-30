const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");

const correctAnswers = {
  q1: "b",
  q2: "b",
  q3: "a",
  q4: "c",
  q5: "b"
};

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;

  for (let question in correctAnswers) {
    const answer = document.querySelector(
      `input[name="${question}"]:checked`
    );

    if (answer && answer.value === correctAnswers[question]) {
      score++;
    }
  }

  result.textContent = `Ваш результат: ${score} из 5`;
});
