const questionsType = ["HTML", "CSS", "JavaScript", "C Language"];
const questionTypeIntroText = document.getElementById("questionTypeIntroText");
const checkbox = document.getElementById("checkboxInput");
const welCard = document.querySelector(".welcomeCard");
const deletCard = document.getElementById("deleteCardBtn");

window.onload = () => {
  welCard.style.visibility = "visible";
};

deletCard.addEventListener("click", () => {
  welCard.style.visibility = "hidden";
});

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
});

document.body.classList.add("dark-mode");

let currentIndex = 0;

function typeText(text, callback) {
  let charIndex = 0;
  questionTypeIntroText.textContent = "";

  const typingInterval = setInterval(() => {
    questionTypeIntroText.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex === text.length) {
      clearInterval(typingInterval);
      setTimeout(callback, 1000);
    }
  }, 150);
}

function startTypingLoop() {
  typeText(questionsType[currentIndex], () => {
    currentIndex = (currentIndex + 1) % questionsType.length;
    startTypingLoop();
  });
}

startTypingLoop();
