import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import "../App.css";

function Flavor() {
  const { Coffee } = useContext(Context);
  return <div className="flavor"><h3>{Coffee.characteristics.flavor}</h3></div>;
}

export default Flavor;
