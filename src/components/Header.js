import React from "react";
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Tweet from './Tweet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
  return (
    <React.Fragment>
      <Row className='mx-0'>
        <Col><Navbar /></Col>
        <Col><Searchbar /></Col>
        <Col><Tweet /></Col>
      </Row>
      <hr/>
    </React.Fragment>
  );
}

export default Header;