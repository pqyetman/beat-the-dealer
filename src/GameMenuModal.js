import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

function GameMenuModal({gameOptions, setGameOptions}) {
  const [show, setShow] = useState(true);
  

  const handleClose = () => {setShow(() => false)};

  const handleFormSelectChange=(e)=>setGameOptions({...gameOptions, [`${e.target.name}`]: Number(e.target.value)})

  return (
    <>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Game Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="px-3">
            <Col>
              <Form.Label>Decks</Form.Label>
              <Form.Select name="decks" size="sm" onChange={handleFormSelectChange}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <option  key={idx} >{idx+1}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Hands</Form.Label>
              <Form.Select size="sm" name="hands" onChange={handleFormSelectChange}>
              {Array.from({ length: 5 }).map((_, idx) => (
                  <option key={idx} >{idx+1}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Play
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameMenuModal;
