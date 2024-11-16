import { Row, Card, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";

const PlayerArea = ({ idx, id, setPlayerDetails, player }) => {
  const elementRef = useRef(null); // Reference to the target element

  const updateCoordinates = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();

      setPlayerDetails((prevPlayerDetails) =>
        prevPlayerDetails.map((detail) =>
          detail.id === id ? { ...detail, x: rect.x, y: rect.y } : detail
        )
      );
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      updateCoordinates();
    });

    if (elementRef.current) {
      // Start observing the element
      observer.observe(elementRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      // Initially get coordinates
      updateCoordinates();
    }

    return () => {
      // Disconnect observer on cleanup
      observer.disconnect();
    };
  }, [player]);

  if (player.id === "dealer-area"){

    return (
       
      <Row className="justify-content-center">
      <Col xs={4}>
        <Card ref={elementRef} id="dealer-area" className="text-center dealer-cards">
          <Card.Body>
            <Card.Text>Dealer's Cards</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )

  }

  else{
  return (
    <Row className="justify-content-center">
      <Card
        style={{ width: "12vw" }}
        className="player-spot text-center"
        id={"player-area-" + (idx + 1)}
        ref={elementRef}
      >
        <Card.Body>
          <Card.Text>Player {idx + 1}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}
};

export default PlayerArea;
