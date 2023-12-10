import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";

function CatDisplay(props) {
  const { setCoffee } = useContext(Context);

  console.log(props.myValue);
  const loaded = () => {
    return (
      <div>
        {/* <button></button> */}
        <h1>
          <img
            onClick={() => setCoffee(props.myValue)}
            src={
              "https://www.bing.com/th?id=OIP.odEzuqOhXMCg38dU-WwIJgHaE7&w=200&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            }
            alt=""
          />
        </h1>
        <h4>{props.myValue.type}</h4>
        <p>{props.myValue.history}</p>
        {/* <p> */}
        {/* <h3>Flavor:</h3> {props.myValue.characteristics.flavor}
        </p>
        <p>
          <h3>Varieties:</h3>
          {props.myValue.popular_varieties}
        </p>
        <p className="processing">{props.myValue.processing_methods[2]}</p>
        <p>
          <h3>Growing Altitude: </h3>
          {props.myValue.cultivation.growing_altitude}
        </p>
        <p>
          <h3> Harvesting Method:</h3>
          {props.myValue.cultivation.harvesting_method}
        </p>
        <p>
          <h3>Climate:</h3>
          {props.myValue.cultivation.preferred_climate}
        </p>
        <p>
          <h3>Regions:</h3>
          {props.myValue.notable_regions}</p>
          
        <p>  <h3>Other Names:</h3>{props.myValue.other_names}</p> */}

        {/* <h4>{props.myValue.pattern}</h4> */}
        {/* <img src={props.myValue.Poster} alt={props.myValue.Title} /> */}
        {/* <h2>{props.myValue.Year}</h2> */}
      </div>
    );
  };

  const loading = () => {
    return <h1>It's brewing!'...</h1>;
  };

  return props.myValue ? loaded() : loading();
}

export default CatDisplay;
