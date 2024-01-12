const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  // Desabilita os botões para evitar cliques adicionais enquanto processamos a resposta
  document.querySelectorAll(".answer").forEach((item) => {
    item.disabled = true;
  });

  if (e.target.getAttribute("data-correct") === "true") {
    // Se a resposta está correta, destaca em verde
    e.target.style.backgroundColor = "#4CAF50"; // verde
    questionsCorrect++;
  } else {
    // Se a resposta está incorreta, destaca a opção correta em verde e a selecionada em vermelho
    document.querySelector(".answer[data-correct='true']").style.backgroundColor = "#4CAF50"; // verde
    e.target.style.backgroundColor = "#FF0000"; // vermelho
  }

  // Atraso de 3 segundos antes de carregar a próxima pergunta
  setTimeout(() => {
    // Reativa os botões
    document.querySelectorAll(".answer").forEach((item) => {
      item.disabled = false;
    });

    if (currentIndex < questions.length - 1) {
      // Se não for a última pergunta, carrega a próxima
      currentIndex++;
      loadQuestion();
    } else {
      // Se for a última pergunta, mostra o resultado final
      finish();
    }
  }, 500);
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  // Adiciona o evento de clique aos botões
  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
