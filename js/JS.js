const phrase = "Te hemos creado un portafolio";
const headerText = document.getElementById("header-text");

// Itera sobre cada letra de la frase y crea elementos <span> para ellas
for (let i = 0; i < phrase.length; i++) {
  const letter = document.createElement("span");
  letter.textContent = phrase[i];
  headerText.appendChild(letter);
}

// Agrega una clase para mostrar las letras gradualmente
const letters = headerText.querySelectorAll("span");
letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.style.opacity = "1";
  }, index * 100);
});
