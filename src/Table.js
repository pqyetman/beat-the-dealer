import PlayingCard from "./PlayingCard";
import Deck from "./Deck";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GameMenuModal from "./GameMenuModal";

function Table() {
  const [gameOptions, setGameOptions] = useState({ decks: 1, hands: 1 });
  const [cardPostitions, setCardPositions] = useState({ x: 0, y: 0 });
  const { decks, hands } = gameOptions;

  useEffect(() => {
    const element = document.getElementsByClassName("player-spot text-center");
    const rect = element[0].getBoundingClientRect();

   

    setCardPositions({ ...cardPostitions, x: rect.x, y: rect.y });
  }, []);

  return (
    <>
      <Row className="ps-2">
        <GameMenuModal
          gameOptions={gameOptions}
          setGameOptions={setGameOptions}
        />

        <Deck decks={decks} />
        {Array.from({ length: 2 }).map((_, idx) => (
          <PlayingCard key={idx} cardPostitions={cardPostitions} />
        ))}
      </Row>
      <Container fluid className="blackjack-table px-3">
        {/* Dealer Area */}
        <Row className="justify-content-center">
          <Col md={5} xs={8}>
            <Card className="text-center dealer-cards">
              <Card.Body>
                <Card.Text>Dealer's Cards</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Player Areas */}
        <Row xs={12} className="justify-content-around ">
          {Array.from({ length: hands }).map((_, idx) => (
            <Col key={idx} xs={2} className="justify-content-around">
              <Card
                style={{ width: "12vw" }}
                className="player-spot text-center"
              >
                <Card.Body>
                  <Card.Text>Player {idx + 1}</Card.Text>
                </Card.Body>
              </Card>
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
