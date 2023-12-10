import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css"
function Regions() {
  const { Coffee } = useContext(Context);
  return <div className="regions"><h3>{Coffee.notable_regions}</h3></div>;
}

export default Regions;
