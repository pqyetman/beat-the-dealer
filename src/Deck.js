import "./cards.css";

function Deck({decks}) {


  return (
    <div  style={{zIndex:3}} className="playingCards faceImages rotateHand">
      <ul className="deck">
      {Array.from({ length: decks*3 }).map((_, idx) => (
        <li className="card back" key={idx} />
      ))}   
      </ul>
      </div>
  );
}

export default Deck;
