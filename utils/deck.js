function createDeck() {
  const types = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const deck = [];
  for (const type of types) {
    for (const rank of ranks) {
      deck.push({ type, rank });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const y = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[y];
    deck[y] = temp;
  }
  return deck;
}

module.exports = { createDeck, shuffleDeck };
