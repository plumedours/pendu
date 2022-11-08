const newGameBtn = document.getElementById("newGameBtn");
const lettersBtn = document.querySelectorAll(".letter");
const findWord = document.getElementById("findWord");
const wrongLabel = document.getElementById("wrongLabel");
const penduImg = document.getElementById("penduImg");
const keyboard = document.getElementById("keyboard");
const wordsList = [
  "ANE",
  "AXE",
  "BEL",
  "BIP",
  "CAR",
  "COL",
  "COQ",
  "COR",
  "COU",
  "CRI",
  "GAG",
  "GAZ",
  "GEL",
  "JUS",
  "NET",
  "NUL",
  "VAL",
  "SKI",
  "SOT",
  "TAS",
  "TIC",
  "ATRE",
  "BEAU",
  "BETE",
  "BOXE",
  "BRUN",
  "CERF",
  "CHEZ",
  "CIRE",
  "DAME",
  "DENT",
  "DOCK",
  "DODO",
  "DRAP",
  "DUNE",
  "EMEU",
  "FADO",
  "FAUX",
  "IBIS",
  "JAZZ",
  "JOLI",
  "JOUE",
  "KAKI",
  "LOGO",
  "LOIN",
  "LONG",
  "LUNE",
  "LYNX",
  "MINE",
  "MURE",
  "OUIE",
  "OURS",
  "PION",
  "RHUM",
  "RIDE",
  "ROCK",
  "SEAU",
  "TEST",
  "THYM",
  "TROU",
  "TRUC",
  "USER",
  "VERT",
  "YOGI",
  "WATT",
  "ACCES",
  "AIMER",
  "ALOES",
  "ASSEZ",
  "AVION",
  "AWALE",
  "BALAI",
  "BANJO",
  "BARBE",
  "BONNE",
  "BRUIT",
  "BUCHE",
  "CACHE",
  "CAPOT",
  "CARTE",
  "CHIEN",
  "CRANE",
  "CYCLE",
  "EBENE",
  "ESSAI",
  "GIFLE",
  "HONNI",
  "JAMBE",
  "KOALA",
  "LIVRE",
  "LOURD",
  "MAMAN",
  "MOULT",
  "NOEUD",
  "ORTIE",
  "PECHE",
  "POIRE",
  "POMME",
  "POSTE",
  "PRUNE",
  "RADAR",
  "RADIS",
  "ROBOT",
  "ROUTE",
  "RUGBY",
  "SEUIL",
  "TAUPE",
  "TENUE",
  "TEXTE",
  "TYRAN",
  "USUEL",
  "VALSE",
  "ACAJOU",
  "AGNEAU",
  "ALARME",
  "ANANAS",
  "ANGORA",
  "ANIMAL",
  "ARCADE",
  "AVIRON",
  "AZIMUT",
  "BABINE",
  "BALADE",
  "BONZAI",
  "BASSON",
  "BILLET",
  "BOUCHE",
  "BOUCLE",
  "BRONZE",
  "CABANE",
  "CAIMAN",
  "CLOCHE",
  "CHEQUE",
  "CIRAGE",
  "COCCYX",
  "CRAYON",
  "GARAGE",
  "GOSPEL",
  "GOULOT",
  "GRAMME",
  "GRELOT",
  "GUENON",
  "HOCHET",
  "HORMIS",
  "HUMOUR",
  "HURLER",
  "JARGON",
  "LIMITE",
  "LIONNE",
  "MENTHE",
  "OISEAU",
  "PODIUM",
  "POULPE",
  "POUMON",
  "PUZZLE",
  "QUARTZ",
  "RAPIDE",
  "SEISME",
  "TETINE",
  "TOMATE",
  "WALLABY",
  "WHISKY",
  "ZIPPER",
  "ABRITER",
  "BALLAST",
  "BARYTON",
  "BASSINE",
  "BATAVIA",
  "BILLARD",
  "BRETZEL",
  "CITHARE",
  "CHARIOT",
  "CLAIRON",
  "CORBEAU",
  "CORTEGE",
  "CRAPAUD",
  "CYMBALE",
  "DENTIER",
  "DJEMBE",
  "DRAPEAU",
  "EXEMPLE",
  "FOURMIS",
  "GRANDIR",
  "ICEBERG",
  "JAVELOT",
  "JOCKEY",
  "JOURNAL",
  "JOURNEE",
  "JOUXTER",
  "LOSANGE",
  "MACADAM",
  "MONDIAL",
  "NOTABLE",
  "OXYGENE",
  "PANIQUE",
  "PETROLE",
  "POTERIE",
  "POUVOIR",
  "RENEGAT",
  "SCOOTER",
  "SENTEUR",
  "SIFFLET",
  "SPIRALE",
  "SUCETTE",
  "STROPHE",
  "TONNEAU",
  "TROUSSE",
  "TUNIQUE",
  "UKULELE",
  "VAUTOUR",
  "ZOZOTER",
  "AQUARIUM",
  "ARAIGNEE",
  "ARBALETE",
  "ARCHIPEL",
  "BANQUISE",
  "BATTERIE",
  "BROCANTE",
  "BROUHAHA",
  "CAPELINE",
  "CLAVECIN",
  "CLOPORTE",
  "DEBUTANT",
  "DIAPASON",
  "GANGSTER",
  "GOTHIQUE",
  "HAUTBOIS",
  "HERISSON",
  "LOGICIEL",
  "OBJECTIF",
  "PARANOIA",
  "PARCOURS",
  "PASTICHE",
  "QUESTION",
  "QUETSCHE",
  "SCARABEE",
  "SCORPION",
  "SYMPTOME",
  "TABOURET",
  "TOMAHAWK",
  "TOUJOURS",
  "TOURISME",
  "TRIANGLE",
  "UTOPIQUE",
  "ZEPPELIN",
  "ACCORDEON",
  "ASCENSEUR",
  "ASCENSION",
  "ASEPTISER",
  "AUTOROUTE",
  "AVALANCHE",
  "BALALAIKA",
  "BILBOQUET",
  "BOURRICOT",
  "BRILLANCE",
  "CABRIOLET",
  "CONTRARIO",
  "CORNEMUSE",
  "DANGEREUX",
  "EPLUCHAGE",
  "FEODALITE",
  "FORTERESSE",
  "GONDOLIER",
  "GRAPHIQUE",
  "HOROSCOPE",
  "INTREPIDE",
  "KLAXONNER",
  "MASCARADE",
  "METAPHORE",
  "NARRATEUR",
  "PERIPETIE",
  "POPULAIRE",
  "PRINTEMPS",
  "QUEMANDER",
  "TAMBOURIN",
  "VESTIAIRE",
  "XYLOPHONE",
  "ACROSTICHE",
  "APOCALYPSE",
  "ATTRACTION",
  "AVENTURIER",
  "BOUILLOTTE",
  "CITROUILLE",
  "CONTROVERSE",
  "COQUELICOT",
  "DISSIMULER",
  "FLIBUSTIER",
  "FORESTIERE",
  "GRENOUILLE",
  "IMPOSSIBLE",
  "LABYRINTHE",
  "MAHARADJAH",
  "PRUDEMMENT",
  "QUADRICEPS",
  "SOLILOQUER",
  "SUBJECTIVE",
  "BACCALAUREAT",
  "ABRACADABRA",
  "FRANCOPHILE",
  "PANDEMONIUM",
  "CHLOROPHYLLE",
  "METALLURGIE",
  "METAMORPHOSE",
  "MONTGOLFIERE",
  "KALEIDOSCOPE",
  "CONQUISTADOR",
  "CONSPIRATEUR",
  "RHODODENDRON",
  "QUALIFICATION",
  "PROTOZOAIRE",
  "QUADRILATERE",
  "ZYGOMATIQUE",
  "SORCELLERIE",
  "BELLIGERANT",
];
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const winOrLoseLabel = document.querySelector(".winOrLoseLabel");
const wordResponse = document.querySelector(".wordResponse");
const replayBtn = document.getElementById("replayBtn");

let srcImg = 0;
let wrong = 7; //pour compter le nbr d'erreur
let arrayWord = []; //tableau pour split le mot en cours
let wordInGame = "";
let hidden_word = [];

function getRandomWord() {
  wordInGame = wordsList[Math.floor(Math.random() * wordsList.length)];
  hidden_word = Array(wordInGame.length).fill("_");
  arrayWord = wordInGame.split("");
  findWord.textContent = hidden_word.join(" ");
}

newGameBtn.addEventListener("click", () => {
  keyboard.style.display = "block";
  getRandomWord();
  restParty();
});

lettersBtn.forEach((letter) => {
  letter.addEventListener("click", () => {
    for (let i = 0; i < arrayWord.length; i++) {
      if (letter.textContent === arrayWord[i]) {
        hidden_word.splice(i, 1, letter.textContent);
        findWord.textContent = hidden_word.join(" ");
        // console.log(hidden_word);
        // console.log(arrayWord);
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
    if (isEqual(hidden_word, arrayWord)) {
      winOrLoseLabel.textContent = "Félicitation ! Vous avez gagnez !";
      wordResponse.textContent = "Le mot à trouver était : " + wordInGame;
      modalContainer.classList.toggle("active");
    } else if (wrong === 0) {
      winOrLoseLabel.textContent = "Dommage ! Vous avez perdu !";
      wordResponse.textContent = "Le mot à trouver était : " + wordInGame;
      modalContainer.classList.toggle("active");
    }
  });
});

function restParty() {
  lettersBtn.forEach((letter) => {
    letter.classList.add("bg-blue-400");
    letter.classList.remove("bg-red-400");
    letter.classList.remove("bg-green-400");
    letter.disabled = false;
    wrong = 7;
    srcImg = 0;
    wrongLabel.textContent = wrong;
    penduImg.src = "./img/hangman_" + srcImg + ".png";
  });
}

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((value, index) => value === arr2[index]);
}

replayBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("active");
  getRandomWord();
  restParty();
});
