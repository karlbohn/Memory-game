const gameContainer = document.getElementById("game");
let guess1 = null;
let guess2 = null;
let clickStop = false;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}


let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color, "card");
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}




let clickCounter = 0
h2 = document.querySelector('h2')


function handleCardClick(event) {
  if (clickStop) return
  if (event.target.classList.contains("guess")) return
 
  clickCounter++
  let attempts = Math.floor(clickCounter/2);
  h2.innerText = "Attempts: " + attempts;


  let card = event.target;
  guessColor = card.classList[0]
  card.style.backgroundColor = guessColor;


  if (!guess1 || !guess2){
    card.classList.add("guess");
    guess1 = guess1 || card;
    guess2 = card === guess1 ? null : card;
  }
  if (guess1 && guess2){
    clickStop = true;
    let color1 = guess1.className;
    let color2 = guess2.className;
    if (color1 === color2){
      guess1.removeEventListener("click",handleCardClick);
      guess2.removeEventListener("click",handleCardClick);
      guess1.classList.add("correct");
      guess2.classList.add("correct");
      guess1 = null;
      guess2 = null;
      clickStop = false;
    }
    else {
      setTimeout(function() {
        guess1.style.backgroundColor = '';
        guess2.style.backgroundColor = '';
        guess1.classList.remove("guess");
        guess2.classList.remove("guess");
        guess1 = null;
        guess2 = null;
        clickStop = false;
      }, 1000)
    }
  }
  let correctCount = document.getElementsByClassName("correct")
if (correctCount.length == 10){
  alert(`You win! Your score: ${attempts}!`)
}
}

