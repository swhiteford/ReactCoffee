import React from "react";
import { useState, useEffect } from "react";
import CatDisplay from "./Cat";
import { useContext } from "react";
import { Context } from "../context/Context";

function Main() {
  // -------->Establish State
  const [pet, setPet] = useState({});

  const {
    setClimate,
    setFlavor,
    setGrowingAltitude,
    setHarvestingMethod,
    setOtherNames,
    setRegions,
    setVarieties,
    setCoffee,
  } = useContext(Context);

  const getCat = async () => {
    const response = await fetch(`https://coffee-type-api.web.app/coffee`);

    const data = await response.json();
    console.log(data);
    setPet(data);
    setCoffee(data[0]);

    // setFlavor(data[0].characteristics.flavor);
    // setClimate(data[3].cultivation.preferred_climate);
    // setGrowingAltitude(data[0].characteristics.growing_altitude);
    // setHarvestingMethod(data[0].characteristics.harvesting_method);
    // setOtherNames(data[0].characteristics.other_names);
    // setRegions(data[0].characteristics.notable_regions);
    // setVarieties(data[0].characteristics.popular_varieties);
    // setGrowingAltitude(data);
    // setHarvestingMethod(data);
    // setOtherNames(data);
    // setRegions(data);
    // setVarieties(data);

    // ------------------------Functions
  };

  useEffect(() => {
    getCat();
  }, []);

  return (

    <div class="container">
    <div className="Main">
      {Object.keys(pet).map((item, index) => (
        <CatDisplay key={index} myValue={pet[item]} />
      ))}
    </div>
    </div>
  );
}

export default Main;
