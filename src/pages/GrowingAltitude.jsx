import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css";

function GrowingAltitude() {
  const { Coffee } = useContext(Context);
  return <div className="GrowingAltitude"><h3>{Coffee.cultivation.growing_altitude}</h3></div>;
}

export default GrowingAltitude;
