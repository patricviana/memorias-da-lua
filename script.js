document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");
  let current = 0;

  function showQuestion(index) {
    questions.forEach((q, i) => {
      q.classList.toggle("hidden", i !== index);
    });
  }

  // Botão "Próxima"
  document.querySelectorAll(".next-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const q = questions[index];
      const correct = q.dataset.answer;
      const checked = q.querySelector("input[type=radio]:checked");
      
      if (!checked || checked.value !== correct) {
        alert("Resposta errada... tente novamente!");
        return;
      }

      showQuestion(index + 1);
    });
  });

  // Botão "Abrir o portal"
  document.querySelector(".finish-btn").addEventListener("click", () => {
    const lastQ = questions[questions.length - 1];
    const correct = lastQ.dataset.answer;
    const checked = lastQ.querySelector("input[type=radio]:checked");

    if (!checked || checked.value !== correct) {
      alert("Resposta errada... tente novamente!");
      return;
    }

    document.getElementById("questions").classList.add("hidden");
    document.getElementById("final-message").classList.remove("hidden");
  });

  // Inicia mostrando só a primeira
  showQuestion(current);
});
