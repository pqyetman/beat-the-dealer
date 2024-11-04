import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function WagerAmountArea() {

const [amount, setAmount] = useState("10");
const [readOnly, setReadOnly] = useState(true);


  return (
    <Stack gap={1} className="text-center text-white">
      <Form.Label >
        Select Wager Amount
      </Form.Label>
      <Form.Range
        min="10"
        max="1000"
        step="10"
        onChange={(e) => setAmount(()=>e.target.value)}
        value={amount}
        onClick={()=>setReadOnly(true)}
      />
      <Form.Label>Amount</Form.Label>
      <Form.Control
        type="text"
        placeholder={amount}  
        readOnly={readOnly}
        onClick={()=>setReadOnly(false)}
        onChange={(e) => setAmount(()=>e.target.value)}
      />
    </Stack>
  );
}

export default WagerAmountArea;
