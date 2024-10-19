const choices = ["Sword", "Axe", "Lance"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerImage = document.getElementById("playerImage").getElementsByTagName('img')[0];
const computerImage = document.getElementById("computerImage").getElementsByTagName('img')[0];
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function getRandomImagePath(folder, type) {
  // Define arrays containing image filenames for each weapon type
  const swordImages = ["Chrom.png", "Felix.png", "Ike.png", "Lucina.png", "Roy.png"];
  const axeImages = ["Cherche.png", "Frederick.png", "Hilda.png", "Camilla.png", "Edelgard.png"];
  const lanceImages = ["Dimitri.png", "Ingrid.png", "Lukas.png", "Nephenee.png", "Oscar.png"];

  // Select the appropriate array based on the folder name
  const images = folder.toLowerCase() === "sword" ? swordImages : folder.toLowerCase() === "axe" ? axeImages : lanceImages;

  // Generate a random index within the range of the selected image array
  const randomIndex = Math.floor(Math.random() * images.length);

  // Construct the full path to the randomly chosen image
  const imagePath = `images/${folder.toLowerCase()}/${images[randomIndex]}`;

  // Return the constructed image path
  return imagePath;
}


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Tie";
  } else {
    switch (playerChoice) {
      case "Sword":
        result = (computerChoice === "Axe") ? "You Win" : "You Lose";
        break;
      case "Lance":
        result = (computerChoice === "Sword") ? "You Win" : "You Lose";
        break;
      case "Axe":
        result = (computerChoice === "Lance") ? "You Win" : "You Lose";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "You Win":
      resultDisplay.classList.add("youWinText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose":
      resultDisplay.classList.add("youWinText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

  // Update character images
  playerImage.src = getRandomImagePath(playerChoice, 'player');
  computerImage.src = getRandomImagePath(computerChoice, 'computer');
}
