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
