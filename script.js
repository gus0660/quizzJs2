/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  // démarrage du quizz
  let quest = document.querySelector("#question");
  let reponse = document.querySelector("#answers");
  let points = document.querySelector("#score");
  let score = 0;
  let indexQuest = 0;
  let indexReponses = 0;

  function erase() {
    reponse.innerHTML = "";
  }

  function check(element, element2) {//cette fonction étais, à l'origine, après l'addEventListener(plus bas) elle permet de checker la bonne réponse.
    if (element == element2) {
      // console.log("YOUPIIII !!")
      score++;
      points.innerHTML = score;
    }
  }

  affich();
  function affich() {
    let currentQuestion = questions[indexQuest].question;// au dépars les 5 variables qui suivent n'étaient pas là et après reflextion j'en ai déduit qu'il falait qu'elle soient générées à l'interieur de la fonction "affich"
    quest.textContent = currentQuestion;
    let bonneReponse = questions[indexQuest].correctAnswerIndex;
    let choixReponses = questions[indexQuest].answers;
    choixReponses.textContent = questions[indexQuest].answers;

    if (indexQuest < questions.length) {
      choixReponses.forEach((itemsRep, indexRep) => {
        // let nouvLi = itemsRep;
        let nouvLi = document.createElement("li");
        nouvLi.className = "answer";
        reponse.appendChild(nouvLi);
        // console.log(itemsRep)
        nouvLi.textContent = itemsRep;
        nouvLi.addEventListener("click", () => {
          // console.log(indexRep)
          // if (indexRep == bonneReponse) {
          //   // console.log("YOUPIIII !!")
          //   score++;
          //   points.innerHTML = score;
          // }
          check(indexRep, bonneReponse);
          indexQuest++;
          if (indexQuest < questions.length) {
            erase();
            affich();
          } else {
            quest.textContent = "GAGNEEEE";
            erase();
          }
        });
      });
    }
  }
});
