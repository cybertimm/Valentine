const text = "Hey Bukola... 💕 I’ve been smiling all day thinking about you.\n\nI have something special to ask you ❤️";
let i = 0;
const speed = 70;
const typeEl = document.getElementById("typewriter");
const music = document.getElementById("music");

function typeWriter() {
  if (i < text.length) {
    typeEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

function nextScreen() {
  music.play();
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}

const noBtn = document.getElementById("no");
const buttonsBox = document.querySelector(".buttons");

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const boxRect = buttonsBox.getBoundingClientRect();
  const x = Math.random() * (boxRect.width - 100);
  const y = Math.random() * (boxRect.height - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
;

document.getElementById("yes").addEventListener("click", () => {
  const flash = document.getElementById("flash");
  const shutter = document.getElementById("shutter");

  flash.classList.add("flash");
  shutter && shutter.play();

  setTimeout(() => {
    document.getElementById("final").innerHTML = `
      <p>Bukola 🥺💕</p>
      <p>You just made my heart very happy.</p>
      <p>Happy Valentine’s Day ❤️</p>
    `;
    startConfetti();
  }, 400);
});
;


const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function startConfetti() {
  for (let i = 0; i < 300; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 1,
    });
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(draw);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);
