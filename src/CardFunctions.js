function shuffleAndSetDeckAmount(numberOfDecks) {
  const deckOfCards = [];
  const ranks = [
    { cardValue: "a" },
    { cardValue: "k" },
    { cardValue: "q" },
    { cardValue: "j" },
    { cardValue: "9" },
    { cardValue: "8" },
    { cardValue: "7" },
    { cardValue: "6" },
    { cardValue: "5" },
    { cardValue: "4" },
    { cardValue: "3" },
    { cardValue: "2" },
    { cardValue: "1" },
  ];

  const suits = ["clubs", "spades", "diamonds", "hearts"];

  for (let i = 0; i < numberOfDecks; i++) {
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        deckOfCards.push({ cardValue: rank.cardValue + " " + suit });
      });
    });
  }
  //multiply the deck

  //shuffle the deck

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(deckOfCards);
  //set the deck to state
  return deckOfCards;
}

function setPlayerCoordinates(players) {
  
  const playerCoordinates = [];

  playerCoordinates.push({
    id: "dealer-area",
    x: null,
    y: null,
    hand: [],
    actionState: "playing"
  });

  for (let i = 1; i <= players; i++) {
   
    playerCoordinates.push({
      id: `player-area-${i}`,
      x: null,
      y: null,
      hand:[],
      amount: 10,
      actionState: "wager"
    });
  }

  return playerCoordinates;
}



export { shuffleAndSetDeckAmount, setPlayerCoordinates };
