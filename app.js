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

let srcImg = 0;
let inGame = false; //partie en cours ou non
let wrong = 7; //pour compter le nbr d'erreur
let arrayWord = []; //tableau pour split le mot en cours
let words = 0; //pour compter le nombre de mot du tableau
let wordsPlayed = ""; //pour garder en mémoire les mots déjà joués
let wordInGame = "";
// let lettersOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let wordsList = ["BONJOUR", "POMME", "ABRICOT", "CHIEN", "CHAT"];
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
  restParty();
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
