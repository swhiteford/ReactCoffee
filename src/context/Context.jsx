import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [Coffee, setCoffee] = useState();
  const [Climate, setClimate] = useState();
  const [Flavor, setFlavor] = useState();
  const [GrowingAltitude, setGrowingAltitude] = useState();
  const [HarvestingMethod, setHarvestingMethod] = useState();
  const [OtherNames, setOtherNames] = useState();
  const [Regions, setRegions] = useState();
  const [Varieties, setVarieties] = useState();

  return (
    <Context.Provider
      value={{
        Coffee,
        setCoffee,
        Climate,
        setClimate,
        Flavor,
        setFlavor,
        GrowingAltitude,
        setGrowingAltitude,
        HarvestingMethod,
        setHarvestingMethod,
        OtherNames,
        setOtherNames,
        Regions,
        setRegions,
        Varieties,
        setVarieties,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
