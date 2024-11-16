import "./cards.css";

function Deck({decks}) {

 const deckLength = JSON.parse(localStorage.getItem("deck")).length

  return (
    <div  style={{zIndex:3}} className="playingCards faceImages rotateHand ">
      <ul className="deck">
      {Array.from({ length: decks === 0? 1: Math.floor(deckLength/(decks*2)) }).map((_, idx) => (
        <li className="card back" key={idx} />
      ))}   
      </ul>
      </div>
  );
}

export default Deck;
