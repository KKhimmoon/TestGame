function calculateCardValue(card) {
  if (card.rank === "Jack" || card.rank === "Queen" || card.rank === "King")
    return 0;
  if (card.rank === "Ace") return 1;
  return parseInt(card.rank, 10);
}

function calculateScore(cards) {
  const score = cards.reduce(
    (total, card) => total + calculateCardValue(card),
    0
  );
  return score;
}

function isWin(playerScore, dealerScore) {
  if (playerScore > dealerScore) return "win";
  if (playerScore < dealerScore) return "lose";
  return "tie";
}

module.exports = { calculateScore, isWin };
