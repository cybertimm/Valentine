// Typewriter intro
const introText =
  "Hey Bukola… 🤍\n\nI’ve been meaning to ask you something.";
const typeEl = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (i < introText.length) {
    typeEl.innerHTML += introText.charAt(i) === "\n" ? "<br>" : introText.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// Screen switch
document.getElementById("continue").addEventListener("click", () => {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
});

// NO button movement (mobile + desktop safe)
const noBtn = document.getElementById("no");
const buttonsBox = document.querySelector(".buttons");

function moveNo() {
  const box = buttonsBox.getBoundingClientRect();
  const x = Math.random() * (box.width - 90);
  const y = Math.random() * (box.height - 40);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// YES button — camera flash + your message
document.getElementById("yes").addEventListener("click", () => {
  const flash = document.getElementById("flash");
  const shutter = document.getElementById("shutter");

  flash.classList.add("flash");
  if (shutter) shutter.play();

  setTimeout(() => {
    document.getElementById("final").innerHTML = `
      <p><strong>Osupuru.</strong></p>
      <p>It’s not like you had any choice,</p>
      <p>but it makes me so happy you said yes 🤍</p>
    `;
  }, 400);
});
