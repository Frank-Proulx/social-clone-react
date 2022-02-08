import React from "react";
import Container from 'react-bootstrap/Container'
import Header from "./Header";
import Home from "./Home";
import TicketList from "./TicketList";

function App(){
  return ( 
    <React.Fragment>
      <Container>
        <Header />
        <Home />
      </Container>
    </React.Fragment>
  );
}

export default App;