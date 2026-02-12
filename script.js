/* Floating hearts */
function createHearts() {
  const heartContainer = document.querySelector(".heart-bg");
  if (!heartContainer) return;

  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.fontSize = (Math.random() * 25 + 20) + "px";
    heartContainer.appendChild(heart);
  }
}
createHearts();

/* Sparkle cursor effect */
document.addEventListener("mousemove", function(e) {
  let sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.innerHTML = "✨";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

/* Music system */
let music;

function setupMusic() {
  music = document.getElementById("bgMusic");
  if (!music) return;

  music.volume = 0.4;
}

function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* PASSWORD LOGIN */
function checkPassword() {
  let pass = document.getElementById("password").value;

  // CHANGE PASSWORD HERE
  let correctPassword = "love123";

  if (pass === correctPassword) {
    window.location.href = "surprise.html";
  } else {
    alert("Wrong password my love 😘 Try again 💕");
  }
}

/* Letter typing animation */
function startTypingLetter() {
  let letterBox = document.getElementById("letterBox");
  let typingText = document.getElementById("typingText");

  if (!letterBox || !typingText) return;

  letterBox.style.display = "block";

  let message = `
To my sweetest Karthikeya 💖,

Happy birthday to my love❤️...! whom I care about more than anything in the world..Cheers to 19 my boyy🥂!!! Thank you for being the best part of my happiness and joy🤌💗 I wish our happiness never ends 🥰..Among the few good things that I have ever done in my life, falling in love with you was the best🫣..I wanted to give you all my love for your birthday but i guess no box is enough to keep thatt😁You are the one who makes me feel special i'm realllyyy luckyy to have you as my cutieee sweetieee boyfriend like uuuuuuu🧿💋I loved you, I love you and I will love you forever🫂🫂Happy birthday to the man I love the mosttt💋💋💋🫂🫂!

Forever yours,
(pallavi) 💌
`;

  typingText.innerHTML = "";
  let i = 0;

  function type() {
    if (i < message.length) {
      typingText.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

/* Party popper */
function popParty() {
  let confettiArea = document.getElementById("confettiArea");
  confettiArea.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerHTML = "🎉✨💖";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
    confettiArea.appendChild(confetti);
  }

  document.getElementById("cakeSection").style.display = "block";
}

/* Cake cutting */
function cutCake() {
  let pieces = document.getElementById("cakePieces");
  pieces.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    let piece = document.createElement("div");
    piece.classList.add("cake-piece");
    piece.innerHTML = "🍰";
    pieces.appendChild(piece);
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

/* Final message */
function showFinalMessage() {
  document.getElementById("finalMessage").style.display = "block";
}

