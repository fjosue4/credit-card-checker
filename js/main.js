// DOM elements and functions

let generatorButton1 = document.getElementById('generator-1');
let generatorButton2 = document.getElementById('generator-2');
let noCard = document.getElementById('no-card');
let generatedCard = document.getElementById('generated-card');
let visaCard = document.getElementById('visa-card');
let masterCard = document.getElementById('mastercard-card');
let amexCard = document.getElementById('amex-card');

function switchDisplayStep2() {
    createCards();
    generatedCard.style.display = 'flex';
    noCard.style.display = 'none';
    visaCard.innerText = card1.toString().replace(/[\,]/gi, '');
    masterCard.innerText = card2.toString().replace(/[\,]/gi, '');
    amexCard.innerText = card3.toString().replace(/[\,]/gi, '');
}

function generateNewCards() {
    card1 = [4];
    card2 = [5];
    card3 = [3];
    createCards();
    visaCard.innerText = card1.toString().replace(/[\,]/gi, '');
    masterCard.innerText = card2.toString().replace(/[\,]/gi, '');
    amexCard.innerText = card3.toString().replace(/[\,]/gi, '');
}

function newCard () {
}

generatorButton1.addEventListener("click", switchDisplayStep2);
generatorButton2.addEventListener("click", generateNewCards);

// Card Validator

/* const validateCred = arr => {
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
  
  } */

// Card generator

let card1 = [4]; // Visa (16 digit) should start with (4xxxx)
let card2 = [5]; // MasterCard (16 digit) should start with (51xxxx ... 55xxx)
let card3 = [3]; // AMEX (15 digit) should start with (34 || 37)

function createVisa() {
    for(let i=0; i < 15; i++) {
      let currNum = Math.floor(Math.random()*10);
      card1.push(currNum);
    }
}

function createMasterCard() {
  let secondNumRandom = Math.floor(Math.random()*5)
  switch (secondNumRandom) {
    case 0:
      card2.push(1)
    break;
    case 1:
      card2.push(2)
    break;
    case 2:
      card2.push(3)
    break;
    case 3:
      card2.push(4)
    break;
    case 5:
      card2.push(5)
    break;
    default: card2.push(1)
      break;
  }
  for(let i=0; i<14; i++){
    let currNum = Math.floor(Math.random()*10);
    card2.push(currNum);
  }
}

function createAmex(){
  let secondNumRandom = Math.floor(Math.random()*2)
  switch (secondNumRandom) {
    case 0:
      card3.push(4)
    break;
    case 1:
      card3.push(7)
    break;
  
    default: card3.push(4)
      break;
  }
  for(let i=0; i<13; i++){
    let currNum = Math.floor(Math.random()*10)
      card3.push(currNum)
  }
}

function createCards() {
createVisa();
createMasterCard();
createAmex();
}

console.log(card1);
console.log(card2);
console.log(card3);