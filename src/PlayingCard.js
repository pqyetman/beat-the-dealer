import { useSpring, animated } from "@react-spring/web";
import "./cards.css";

function PlayingCard({playerLocation}) {


  const springs = useSpring({
    from: { x: 0, y: 0, zIndex: 2 },
    to: { x: playerLocation.x, y: playerLocation.y, zIndex: 2 },
  });

  return (
    <animated.div style={{ ...springs }}>
      <div className="playingCards faceImages rotateHand">
        <div className="card rank-k clubs">
          <span className="rank">K</span>
          <span className="suit">&clubs;</span>
        </div>
      </div>
    </animated.div>
  );
}

export default PlayingCard;
