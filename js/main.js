// DOM elements and functions

const generatorButton1 = document.getElementById('generator-1');
const generatorButton2 = document.getElementById('generator-2');
const noCard = document.getElementById('no-card');
const generatedCard = document.getElementById('generated-card');
const validateCardDiv = document.getElementById('validate-card');
const visaCard = document.getElementById('visa-card');
const masterCard = document.getElementById('mastercard-card');
const amexCard = document.getElementById('amex-card');
const randomCardDiv = document.getElementsByClassName('random-card');
const randomCardPlainText = document.getElementsByClassName('card-plaintext')
const cardInput = document.getElementById('card-input');
const cardValidityIcon = document.getElementById('card-validity-icon');
const cardValidityText = document.getElementById('card-validity-text');
const cardBrandLogo = document.getElementById('card-brand-logo');
const cardBrandText = document.getElementById('card-brand-text');
const clearButton = document.getElementById('clear-input');
console.log(randomCardDiv);
console.log(randomCardPlainText);

function switchDisplayStep2() {
  card1 = [4];
  card2 = [5];
  card3 = [3];
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


generatorButton1.addEventListener('click', switchDisplayStep2);
generatorButton2.addEventListener('click', generateNewCards);
clearButton.addEventListener('click', clearResults)

function clearResults() {
  cardInput.value = '';
  generateNewCards();
  generatedCard.style.display = 'flex';
  validateCardDiv.style.display = 'none';
}

for(let i=0; i<randomCardDiv.length; i++){
  randomCardDiv[i].addEventListener("click", () => {
    cardInput.value = randomCardPlainText[i].outerText;
    showResultsDiv();
    });
}

cardInput.addEventListener('input', showResultsDiv)

function showResultsDiv() {
  if (cardInput.value) {
  generatedCard.style.display = 'none';
  noCard.style.display = 'none';
  validateCardDiv.style.display = 'flex';
  let cardValue = cardInput.value.split('');
  cardValue = cardValue.map(str => {
    return Number(str);
  });
  if(cardValue[0] === 4) {
    cardBrandLogo.innerHTML = '<iconify-icon icon="cib:cc-visa" class="card-icon"></iconify-icon>'
    cardBrandText.innerText = "You're checking a Visa card"
  } else if(cardValue[0] === 5) {
    cardBrandLogo.innerHTML = '<iconify-icon icon="cib:cc-mastercard" class="card-icon"></iconify-icon>'
    cardBrandText.innerText = "You're checking a MasterCard"
  } else if(cardValue[0] === 3) {
    cardBrandLogo.innerHTML = '<iconify-icon icon="cib:cc-amex" class="card-icon"></iconify-icon>'
    cardBrandText.innerText = "You're checking an AMEX card"
  } else {
    cardBrandLogo.innerHTML = '<iconify-icon icon="ci:warning" class="alert"></iconify-icon>'
    cardBrandText.innerText = "Please enter a Visa, MasterCard or AMEX number!"
  }
  let validationResult = false;
  if (cardValue.length > 13) {
  validationResult = validateCred(cardValue);
}
  if(validationResult) {
    cardValidityIcon.innerHTML = '<iconify-icon icon="bi:check-circle-fill" class="success"></iconify-icon>'
    cardValidityText.innerText = 'This card is valid';
  } else {
    cardValidityIcon.innerHTML = '<iconify-icon icon="ci:off-close" class="failure"></iconify-icon>'
    cardValidityText.innerText = 'This card is not valid';
  }
  } else if (cardInput.value === '') {
    generatedCard.style.display = 'none';
    noCard.style.display = 'flex';
    validateCardDiv.style.display = 'none';
  }
}

 //Card Validator

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
    case 4:
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

// dark-mode

const darkToggle = document.querySelector('#theme-toggler');
const moduleContainerInst = document.getElementById('instructions-module')
const moduleContainerCards = document.getElementById('cards-module')
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');


darkToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
  moduleContainerCards.classList.toggle('dark-module');
  moduleContainerInst.classList.toggle('dark-module');
  sunIcon.classList.toggle('active');
  moonIcon.classList.toggle('active');
  sunIcon.classList.toggle('inactive');
  moonIcon.classList.toggle('inactive');
})