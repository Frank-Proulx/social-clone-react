import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar(){
  return (
    <React.Fragment>
      <Row className="mx-0">
        <Button as={Col} variant="outline-secondary">Home</Button>
        <Button as={Col} variant="outline-secondary">Notifications</Button>
        <Button as={Col} variant="outline-secondary">Messages</Button>
      </Row>
    </React.Fragment>
  );
}

export default Navbar;