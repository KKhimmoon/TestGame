const readline = require("readline");
const { createDeck, shuffleDeck } = require("./utils/deck");
const { calculateScore, isWin } = require("./utils/gameLogic");
let deck = [];
chips = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  deck = createDeck();
  shuffleDeck(deck);
  playGame();
}

function playGame() {
  rl.question("Please put your bet: ", (bet) => {
    bet = parseInt(bet, 10);
    if (isNaN(bet) || bet <= 0) {
      console.log("Invalid bet. Please enter a valid amount.");
      return playGame();
    }
    if (deck.length < 4) {
      console.log("Not enough cards in the deck. Game over.");
      if (chips < 0) {
        console.log(`You lost total ${Math.abs(chips)} chips.`);
      } else {
        console.log(`You got total ${chips} chips.`);
      }
      rl.close();
      return;
    }
    const playerCards = [deck.pop(), deck.pop()];
    const dealerCards = [deck.pop(), deck.pop()];
    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(dealerCards);

    console.log(
      `You got ${playerCards[0].type}-${playerCards[0].rank}, ${playerCards[1].type}-${playerCards[1].rank}.`
    );
    console.log(
      `The dealer got ${dealerCards[0].type}-${dealerCards[0].rank}, ${dealerCards[1].type}-${dealerCards[1].rank}.`
    );

    const result = isWin(playerScore, dealerScore);
    if (result === "win") {
      chips += bet;
      console.log(`You win!!!,received ${bet} chips.`);
    } else if (result === "lose") {
      chips -= bet;
      console.log(`You lose!,lost ${bet} chips.`);
    } else {
      console.log("It's a tie! No chips received or lost.");
    }
    rl.question("Wanna play more (Yes/No)? : ", (answer) => {
      if (answer === "Yes") {
        playGame();
      } else {
        if (chips < 0) {
          console.log(`You lost total ${Math.abs(chips)} chips.`);
        } else {
          console.log(`You got total ${chips} chips.`);
        }
        rl.close();
      }
    });
  });
}

startGame();
