// Game state - Salih del 
let currentScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
const winningScore = 56;

// Referens till alla element i DOM - Salih
const btnRoll = document.querySelector('.btnRoll');
const btnHold = document.querySelector('.btnHold');
const newGameAll = document.querySelectorAll('.newGame');
const diceImage = document.querySelector('#diceImage');
const currentText = document.querySelector('#current');
const firstPoint = document.querySelector('#firstPoint');
const secondPoint = document.querySelector('#secondPoint');

const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');

const playerText = document.querySelector('#playerText');
const pointText = document.querySelector('#pointText');

// Objekt med bilder, varje bild ska ha en key med nummer, valuen ska vara src - Salihs del igen
const diceImages = {
  1: 'assets/1.png',
  2: 'assets/2.png',
  3: 'assets/3.png',
  4: 'assets/4.png',
  5: 'assets/5.png',
  6: 'assets/6.png'
};

// Visa vems tur det är - Yosef
const updatePlayerHighlight = () => {
  if (activePlayer === 0) {
    playerOne.classList.add('active');
    playerTwo.classList.remove('active');
  } else {
    playerTwo.classList.add('active');
    playerOne.classList.remove('active');
  }
};

// Ändra spelare - Yosefs del
const switchPlayer = () => {
  // Nollställ poäng
  currentScore = 0;
  // aktiv spelare
  activePlayer = 1 - activePlayer;
  // uppdatera spelarens underline och fontwheight
  updatePlayerHighlight(); 
  currentText.textContent = `Player ${activePlayer + 1}'s turn.`;
  playerText.textContent = '';
  pointText.textContent = '';
};

// Roll dice function - Hassan
const rollDice = () => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  diceImage.src = diceImages[diceValue];
  return diceValue;
};

// Rulla tärning - Yosef och Hassan
btnRoll.addEventListener('click', () => {
  diceImage.style.display = 'block';
  const dice = rollDice();

  if (dice === 1) {
    // När tärningen visar numret 1 då ska man vara så fin och byta - Hassan
    // currentText.textContent = `Player ${activePlayer + 1} rolled a 1! Switching turns.`;
    switchPlayer();
  } else {
    currentScore += dice;
    currentText.textContent = '';
    playerText.textContent = `Player ${activePlayer + 1} rolled ${dice}`
    pointText.textContent = `Current score: ${currentScore}.`;
  }
});

// Hold knappen - Yosef och Hassan
btnHold.addEventListener('click', () => {
  totalScores[activePlayer] += currentScore; 
  currentScore = 0;

  if (activePlayer === 0) {
    firstPoint.textContent = totalScores[0];
  } else {
    secondPoint.textContent = totalScores[1];
  }

  // Se vem som vinner - Hassan
  if (totalScores[activePlayer] >= winningScore) {
    playerText.textContent = '';
    pointText.textContent = '';
    currentText.textContent = `Player ${activePlayer + 1} wins!`;
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchPlayer();
  }
});

// När man startar ett nytt spel Salihs del
newGameAll.forEach(game => {
  game.addEventListener('click', () => {
    diceImage.style.display = 'none';
    totalScores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
  
    firstPoint.textContent = '0';
    secondPoint.textContent = '0';
    currentText.textContent = '';
    playerText.textContent = '';
    pointText.textContent = '';
    diceImage.src = '';
  
    btnRoll.disabled = false;
    btnHold.disabled = false;
  
    updatePlayerHighlight(); 
  });
});


// // Salihs del
// newGameIcon.addEventListener('click', () => {
//   diceImage.style.display = 'none';
//   totalScores = [0, 0];
//   activePlayer = 0;
//   currentScore = 0;

//   firstPoint.textContent = '0';
//   secondPoint.textContent = '0';
//   currentText.textContent = '';
//   playerText.textContent = '';
//   pointText.textContent = '';
//   diceImage.src = '';

//   btnRoll.disabled = false;
//   btnHold.disabled = false;

//   updatePlayerHighlight(); 
// });

updatePlayerHighlight(); 

