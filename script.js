const text = "Hey my love... I have something special to ask you ❤️";
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
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

document.getElementById("yes").addEventListener("click", () => {
  document.getElementById("final").innerHTML =
    "YAY!!! 💕🥰 I knew you'd say yes!";
  startConfetti();
});

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
