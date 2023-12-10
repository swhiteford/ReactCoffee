import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="NavBar">
        <div>
          <Link to="/Home">Home</Link>
        </div>

        <div>
          <Link to="/Climate">Climate</Link>
        </div>

        <div>
          <Link to="/Flavor">Flavor</Link>
        </div>

        <div>
          <Link to="/Growing Altitude">Growing Altitude</Link>
        </div>

        <div>
          <Link to="/Harvesting Method">Harvesting Method</Link>
        </div>

        <div>
          <Link to="/Other Names">Other Names</Link>
        </div>

        <div>
          <Link to="/Regions">Regions</Link>
        </div>

        <div>
          <Link to="/Varieties">Varieties</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
