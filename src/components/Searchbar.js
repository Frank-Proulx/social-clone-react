import React from "react";

function Searchbar(){
  return (
    <React.Fragment>
      <form>
        <input className="form-control-sm border border-primary right-align" type="text" placeholder="Search..." />
      </form>
    </React.Fragment>
  );
}

export default Searchbar;