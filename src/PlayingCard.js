import { useSpring, animated } from "@react-spring/web";
import "./cards.css";

function PlayingCard({idx, playerLocation, hand}) {

 

  const springs = useSpring({
    from: { x: 0, y: 0, zIndex: 2 },
    to: { x: playerLocation.x + idx*30, y: playerLocation.y, zIndex: 2 },
  });

  return (
    <animated.div style={{ ...springs }}>
      <div className="playingCards faceImages rotateHand">
        <div className={'card rank-' + hand.cardValue}>
          <span className="rank">{hand.cardValue.split(" ")[0].toUpperCase()}</span>
          {hand.cardValue.split(" ")[1] === "diamonds" && <span className="suit">&diams;</span>}
          {hand.cardValue.split(" ")[1] === "hearts" && <span className="suit">&hearts;</span>}
          {hand.cardValue.split(" ")[1] === "clubs" && <span className="suit">&clubs;</span>}
          {hand.cardValue.split(" ")[1] === "spades" && <span className="suit">&spades;</span>}
        </div>
      </div>
    </animated.div>
  );
}

export default PlayingCard;
