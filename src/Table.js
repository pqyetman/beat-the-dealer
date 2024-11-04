import PlayingCard from "./PlayingCard";
import Deck from "./Deck";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GameMenuModal from "./GameMenuModal";
import ChipArea from "./ChipArea";
import WagerAmountArea from "./WagerAmountArea";

function Table() {
  const [gameOptions, setGameOptions] = useState({
    numberOfDecks: 1,
    players: 1,
  });
  const { numberOfDecks, players } = gameOptions;
  const [deck, setDeck] = useState([]);
  const [playerLocations, setPlayerLocations] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  function shuffleAndSetDeckAmount() {
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
    setDeck(() => deckOfCards);
  }

  function dealHand() {
    const playerCoordinates = [];
    const dealerArea = document.getElementById("dealer-area");
    const dealerAreaRect = dealerArea.getBoundingClientRect();
    playerCoordinates.push({
      id: "dealer-area",
      x: dealerAreaRect.x,
      y: dealerAreaRect.y,
    });

    for (let i = 1; i <= players; i++) {
      const playerArea = document.getElementById(`player-area-${i}`);
      const playerAreaRect = playerArea.getBoundingClientRect();
      playerCoordinates.push({
        id: `player-area-${i}`,
        x: playerAreaRect.x,
        y: playerAreaRect.y,
      });
    }

    setPlayerLocations(() => playerCoordinates);
  }

  return (
    <>
      <Row className="ps-2">
        <GameMenuModal
          gameOptions={gameOptions}
          setGameOptions={setGameOptions}
          shuffleAndSetDeckAmount={shuffleAndSetDeckAmount}
        />

        <Deck deck={deck} numberOfDecks={numberOfDecks} />

        {playerLocations[0] &&
          playerLocations.map((playerLocation, idx) => (
            <PlayingCard key={idx} playerLocation={playerLocation} />
          ))}
      </Row>
      <Container fluid className="blackjack-table px-3">
        {/* Dealer Area */}
        <Row className="justify-content-center">
          <Col md={5} xs={8}>
            <Card id="dealer-area" className="text-center dealer-cards">
              <Card.Body>
                <Card.Text>Dealer's Cards</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Player Areas */}
        <Row xs={10} className="justify-content-around ">
          {Array.from({ length: players }).map((_, idx) => (
            <Col key={idx} xs={2} >
              <Row className="justify-content-center">
              <Card
                style={{ width: "12vw" }}
                className="player-spot text-center"
                id={"player-area-" + (idx + 1)}
              >
                <Card.Body>
                  <Card.Text>Player {idx + 1}</Card.Text>
                </Card.Body>
              </Card>
              </Row>
              <div className="d-flex justify-content-center" >
              <ChipArea />
              </div>
              <div className="d-flex justify-content-center mt-2" >
              <WagerAmountArea/>
              </div>
            </Col>
          ))}
        </Row>

        {/* Betting Area */}
        <Row className="justify-content-around betting-area">
          <Col lg={1} xs={3} className="text-center">
            <Button variant="warning" size="lg" className="bet-button">
              HIT
            </Button>
          </Col>
          <Col lg={1} md={2} xs={3} className="text-center">
            <Button variant="warning" size="lg" className="bet-button">
              STAY
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Table;
