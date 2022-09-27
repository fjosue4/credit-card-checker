// DOM elements and functions

let generatorButton1 = document.getElementById('generator-1');
let generatorButton2 = document.getElementById('generator-2');
let noCard = document.getElementById('no-card');
let generatedCard = document.getElementById('generated-card');

function switchDisplayStep2 () {
    generatedCard.style.display = 'flex'
    noCard.style.display = 'none'
}

function newCard () {
}

generatorButton1.addEventListener("click", switchDisplayStep2);

// Card Validator

const validateCred = arr => {
    let reversedCard = [...arr].reverse();
  for (let i = 1; i < reversedCard.length; i += 2) {
    reversedCard[i] *= 2;
     if (reversedCard[i] > 9) {
      reversedCard[i] -= 9;
       }
     }
     let cardSum = reversedCard.reduce((prev, curr) => prev + curr);
     validator = (cardSum % 10);
     if(validator === 0) {
      cardValid = true;
     } else {
      cardValid = false;
     }
     return cardValid;
  
  }

// Card generator

let card1;
let card2;
let card3;

function createCards () {
    
}