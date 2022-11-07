const newGameBtn = document.getElementById("newGameBtn");
const lettersBtn = document.querySelectorAll(".letter");
const findWord = document.getElementById("findWord");
const wrongLabel = document.getElementById("wrongLabel");
const penduImg = document.getElementById("penduImg");
const keyboard = document.getElementById("keyboard");

let srcImg = 0;
let inGame = false; //partie en cours ou non
let wrong = 7; //pour compter le nbr d'erreur
let arrayWord = []; //tableau pour split le mot en cours
let words = 0; //pour compter le nombre de mot du tableau
let wordsPlayed = ""; //pour garder en mémoire les mots déjà joués
let wordInGame = "";
// let lettersOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let wordsList = ["BONJOUR", "POMME", "ABRICOT", "CHIEN", "CHAT"];
let arr = [];

console.log(inGame);

function getRandomWord() {
  wordInGame = wordsList[Math.floor(Math.random() * wordsList.length)];
  hidden_word = Array(wordInGame.length).fill("_");
  arrayWord = wordInGame.split("");
  findWord.textContent = hidden_word.join(" ");
  console.log(wordInGame);
  console.log(hidden_word);
  console.log(arrayWord);
}

newGameBtn.addEventListener("click", () => {
  keyboard.style.display = "block";
  console.log(inGame);
  getRandomWord();
});

lettersBtn.forEach((letter) => {
  letter.addEventListener("click", () => {
    console.log(letter.textContent);

    for (let i = 0; i < arrayWord.length; i++) {
      if (letter.textContent === arrayWord[i]) {
        hidden_word.splice(i, 1, letter.textContent);
        console.log(arrayWord.indexOf(arrayWord[i]));
        findWord.textContent = hidden_word.join(" ");
        console.log(hidden_word);
        // console.log(true);
      }
      letter.disabled = true;
    }

    if (!wordInGame.includes(letter.textContent)) {
      letter.classList.remove("bg-blue-400");
      letter.classList.add("bg-red-400");
      srcImg++;
      wrong--;
      wrongLabel.textContent = wrong;
      penduImg.src = "./img/hangman_" + srcImg + ".png";
    } else {
      letter.classList.remove("bg-blue-400");
      letter.classList.add("bg-green-400");
    }
  });
});
