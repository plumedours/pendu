const newGameBtn = document.getElementById("newGameBtn");
const lettersBtn = document.querySelectorAll(".letter");
const findWord = document.getElementById("findWord");

let inGame = false; //partie en cours ou non
let wrong = 0; //pour compter le nbr d'erreur
let arrayWord = []; //tableau pour split le mot en cours
let words = 0; //pour compter le nombre de mot du tableau
let wordsPlayed = ""; //pour garder en mémoire les mots déjà joués
let wordInGame = "";
// let lettersOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let wordsList = ["BONJOUR", "POMME", "ABRICOT", "CHIEN", "CHAT"];
let arr = [];

console.log(wordsList);

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
  getRandomWord();
});

lettersBtn.forEach((letter) => {
  letter.addEventListener("click", () => {
    console.log(letter.textContent);
    for (let i = 0; i < arrayWord.length; i++) {
      if (letter.textContent === arrayWord[i]) {
        hidden_word.splice(arrayWord.indexOf(arrayWord[i]), 1, arrayWord[i]);
        console.log(arrayWord.indexOf(arrayWord[i]));
        findWord.textContent = hidden_word.join(" ");
        console.log(hidden_word);
        // console.log(true);
      } else {
        // console.log(false);
      }
    }
  });
});
