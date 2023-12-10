import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css"

function HarvestingMethod() {
  const { Coffee } = useContext(Context);
  return <div className="HarvestingMethod"><h3>{Coffee.cultivation.harvesting_method}</h3></div>;

}

export default HarvestingMethod;
