function checkAnswer() {
  const correctAnswer = 4;
  userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById("feedback");
  if (correctAnswer === userAnswer) {
    feedback.innerHTML = "Correct! Well done.";
  } else {
    feedback.innerHTML = "That's incorrect. Try again!";
  }
  console.log(userAnswer);
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
