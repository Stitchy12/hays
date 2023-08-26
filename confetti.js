const confettiContainer = document.getElementById("confetti-container");

function createConfetti() {
  const confettiCount = 100;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.setProperty("--pos-x", Math.random());
    confettiContainer.appendChild(confetti);
  }
}

createConfetti();