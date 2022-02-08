import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Feed from './Feed';
import SuggestFriend from './SuggestFriend';

function Home(){
  return (
    <React.Fragment>
        <Row className='mx-0'>
          <Col>
            <Profile />
            <AboutMe />
          </Col>
          <Col><Feed /></Col>
          <Col><SuggestFriend /></Col>
        </Row>
    </React.Fragment>
  );
}

export default Home;