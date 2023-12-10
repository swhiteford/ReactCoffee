import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css"

function OtherNames() {
  const { Coffee } = useContext(Context);
  return <div className="OtherNames"><h3>{Coffee.other_names}</h3></div>;
}

export default OtherNames;
