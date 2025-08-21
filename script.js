const questions = document.querySelectorAll(".question");
let current = 0;

// Esconde todas as perguntas, mostra só a primeira
questions.forEach((q, i) => {
  if (i !== 0) q.classList.add("hidden");
});

// Para cada pergunta, escuta clique numa resposta
questions.forEach((q, i) => {
  const correct = q.dataset.answer;
  const inputs = q.querySelectorAll("input[type=radio]");

  inputs.forEach(input => {
    input.addEventListener("change", () => {
      if (input.value === correct) {
        // Resposta certa → esconde pergunta atual e mostra próxima
        q.classList.add("hidden");
        if (i + 1 < questions.length) {
          questions[i + 1].classList.remove("hidden");
        } else {
          // Se era a última → mostra mensagem final
          document.getElementById("final-message").classList.remove("hidden");
        }
      } else {
        // Resposta errada → alerta
        alert("Essa não é a resposta certa, tente novamente.");
        input.checked = false; // desmarca opção errada
      }
    });
  });
});
