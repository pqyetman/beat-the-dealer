import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const GameOptionsButtonArea = ({id, setPlayerDetails}) => {

    function placeWager(){

        setPlayerDetails(prevPlayerDetails => prevPlayerDetails.map(detail => 
            detail.id === id ? { ...detail, actionState: "playing" } : detail
          )); 

       

    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="vertical"
        gap={1}
        className="justify-content-center align-items-center"
      >
        <Button variant="outline-light" size="sm" onClick={placeWager}>
          Place Bet
        </Button>       
      </Stack>
    </div>
  );
};

export default GameOptionsButtonArea;
