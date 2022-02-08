import React from "react";
import Button from 'react-bootstrap/Button'

function Tweet(){
  return (
    <React.Fragment>
      <Button variant="outline-secondary" className="border border-primary rounded btn-sm tweet-button">Tweet</Button>
    </React.Fragment>
  );
}

export default Tweet;