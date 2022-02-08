import React from "react";
import PropTypes from "prop-types";

function Users(props){
  return (
    <React.Fragment>
      <img src={props.img} alt="profile pic"></img>
      <h3>{props.name}</h3>
      <p>
        <a href="http://www.google.com">Tweets</a> | <a href="http://www.google.com">Following</a> | <a href="http://www.google.com">Followers</a>
      </p>
      <p><em>{props.status}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Users.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Users;