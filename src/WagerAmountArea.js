import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function WagerAmountArea({ amount, id, setPlayerDetails, actionState }) {
  const [readOnly, setReadOnly] = useState(true);

  function setAmount(newAmount) {
    setPlayerDetails((prevPlayerDetails) =>
      prevPlayerDetails.map((detail) =>
        detail.id === id ? { ...detail, amount: newAmount } : detail
      )
    );
  }

if (actionState === "wager") {
  return (
    <Stack
      gap={1}
      className="text-center justify-content-center align-items-center text-white"
    > 
      <Form.Label>Select Wager Amount</Form.Label>
      <Form.Range
        style={{ width: "33%" }}
        min="10"
        max="1000"
        step="10"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        onClick={() => setReadOnly(true)}
      />
      <Stack
        gap={1}
        direction="horizontal"
        className="mt-1 justify-content-center align-items-center"
      >
        <Form.Label>$</Form.Label>
        <Form.Control
          style={{ width: "33%" }}
          type="text"
          placeholder={amount}
          readOnly={readOnly}
          onClick={() => setReadOnly(false)}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Stack>
          
    </Stack>
  );}

  else {
    return null
  }
}

export default WagerAmountArea;
