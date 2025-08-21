const questions = [
  "Qual foi o último sonho bonito que você lembra?",
  "Se pudesse guardar apenas uma memória, qual seria?",
  "Que palavra descreveria a Lua hoje?"
];

let currentQuestion = 0;

function nextQuestion() {
  const answerInput = document.getElementById("answer");
  if (answerInput.value.trim() === "") return;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("question").textContent = questions[currentQuestion];
    answerInput.value = "";
  } else {
    document.getElementById("portal").innerHTML = "<h2>Bem-vinda ao Portal da Lua 🌙</h2><p>Agora siga para o presente...</p>";
  }
}

window.onload = () => {
  document.getElementById("question").textContent = questions[currentQuestion];
};
