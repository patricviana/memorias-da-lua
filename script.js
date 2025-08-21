document.getElementById("submit").addEventListener("click", function () {
  const questions = document.querySelectorAll(".question");
  let allCorrect = true;

  questions.forEach((q, index) => {
    const correct = q.dataset.answer;
    const checked = q.querySelector("input[type=radio]:checked");
    if (!checked || checked.value !== correct) {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    document.getElementById("questions").classList.add("hidden");
    document.getElementById("final-message").classList.remove("hidden");
  } else {
    alert("Nem todos os mistérios foram desvendados... tente novamente.");
  }
});
