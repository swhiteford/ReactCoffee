import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css"

function Varieties() {
  const { Coffee } = useContext(Context);
  return <div className="Variety"><h3>{Coffee.popular_varieties}</h3></div>;
}

export default Varieties;
