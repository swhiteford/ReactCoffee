import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../App.css"

export default function Climate() {
  const { Coffee } = useContext(Context);
    return <div className="climate"><h3>{Coffee.cultivation.preferred_climate}</h3></div>;
}
