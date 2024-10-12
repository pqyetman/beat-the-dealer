import Container from "react-bootstrap/Container";
import Table from "./Table";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlackjackTable.css";


function App() {
  return (
    <Container fluid className="p-0" style={{overflow: "hidden"}} >
      <Navigation />    
      <Table style={{ zIndex: 1 }} />
    </Container>
  );
}

export default App;
