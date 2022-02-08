import React from "react";
import Users from "./Users"
import santa from "./../img/santa.jpeg"


const mainUserList = [
  {
    name: 'Tom Stamps',
    status: 'Firebase won\'t save record. Halp.',
    img: santa
  },
  {
    name: 'Linda House',
    status: 'Prop types are throwing an error.',
    img: santa
  },
  {
    name: 'Steve Car',
    status: 'Child component isn\'t rendering.',
    img: santa
  }
];

function Feed(){
  return (
    <React.Fragment>
      <div className="feed">
        {mainUserList.map((user, index) =>
          <Users 
            name={user.name}
            status={user.status}
            img={user.img}
            key={index}/>
            )}
      </div>
    </React.Fragment>
  );
}

export default Feed;