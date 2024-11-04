import "./cards.css";

function Deck({deck, numberOfDecks}) {


  return (
    <div  style={{zIndex:3}} className="playingCards faceImages rotateHand ">
      <ul className="deck">
      {Array.from({ length: Math.floor(deck.length/(numberOfDecks*2)) }).map((_, idx) => (
        <li className="card back" key={idx} />
      ))}   
      </ul>
      </div>
  );
}

export default Deck;
