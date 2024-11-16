import PlayingCard from "./PlayingCard";
import PlayerArea from "./PlayerArea";
import Deck from "./Deck";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameMenuModal from "./GameMenuModal";
import ChipArea from "./ChipArea";
import WagerAmountArea from "./WagerAmountArea";
import { setPlayerCoordinates, shuffleAndSetDeckAmount } from "./CardFunctions";
import GameOptionsButtonArea from "./GameOptionsButtonArea";

function Table() {
  const [gameOptions, setGameOptions] = useState({
    decks: 0,
    players: 0,
  });
  const { decks, players } = gameOptions;
  const [playerDetails, setPlayerDetails] = useState([]);

  useEffect(() => {
    const newDeck = shuffleAndSetDeckAmount(decks);
    
    const newLocations = setPlayerCoordinates(players);
    localStorage.setItem("deck", JSON.stringify(newDeck));
   
    setPlayerDetails(() => newLocations);
  }, [decks, players]);

  useEffect(() => {
    if (
      playerDetails.length > 1 &&
      playerDetails.every((player) => player.actionState === "playing")
    ) {
      playerDetails.forEach((player) => {
        if (player.hand.length < 2) {
          const nextCard = JSON.parse(localStorage.getItem("deck")).at(-1);

          setPlayerDetails((prevPlayerDetails) =>
            prevPlayerDetails.map((detail) =>
              detail.id === player.id
                ? { ...detail, hand: [...detail.hand, nextCard] }
                : detail
            )
          );
          const oldDeck = JSON.parse(localStorage.getItem("deck"));
          const newDeck = oldDeck.slice(0, oldDeck.length - 1);
          localStorage.setItem("deck", JSON.stringify(newDeck));
        }
      });
    }

  
  }, [playerDetails]);

  return (
    <>
      <Row className="ps-2">
        <GameMenuModal
          gameOptions={gameOptions}
          setGameOptions={setGameOptions}
        />

        {  decks > 0 ? <Deck decks={decks} /> : null}

      {playerDetails.length>=1 && 
       playerDetails.filter(player => player.actionState ==="playing" && player.hand && player.hand.length >=1).map(player =>

        player.hand.map((hand,idx)=><PlayingCard key={player + hand + idx} idx={idx} hand={hand} playerLocation={player}/>)

       )
      }
      </Row>
      <Container fluid className="blackjack-table px-3">
        {/* Dealer Area */}
        {playerDetails[0] &&
            playerDetails
              .filter((player) => player.id === "dealer-area")
              .map((player, idx) => (

                  <PlayerArea idx={idx} id={player.id} player={player} setPlayerDetails={setPlayerDetails}/>
                ))}

        {/* Player Areas */}
        <Row xs={10} className="justify-content-around ">
          {playerDetails[0] &&
            playerDetails
              .filter((player) => player.id !== "dealer-area")
              .map((player, idx) => (
                <Col key={idx} xs={2}>
                  <PlayerArea idx={idx} id={player.id} player={player} setPlayerDetails={setPlayerDetails}/>
                  <div className="d-flex justify-content-center mt-3">
                    <ChipArea amount={player.amount} />
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <WagerAmountArea
                      amount={player.amount}
                      id={player.id}
                      actionState={player.actionState}
                      setPlayerDetails={setPlayerDetails}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <GameOptionsButtonArea
                      id={player.id}
                      setPlayerDetails={setPlayerDetails}
                    />
                  </div>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
}

export default Table;
