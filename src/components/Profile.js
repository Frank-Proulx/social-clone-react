import React from "react";
import santa from "./../img/santa.jpeg";

function Profile(){
  return (
    <React.Fragment>
      <div class="profile">
        <img src={santa} className="profile-img" alt="A santa"></img>
        <h3>Kellie A. Corrigan</h3>
        <p>
          <a href="http://www.google.com">Tweets</a> | <a href="http://www.google.com">Following</a> | <a href="http://www.google.com">Followers</a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Profile;