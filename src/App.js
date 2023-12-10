//Import route and our components
import { Route, Router, Routes } from "react-router-dom";
import OtherNames from "./pages/OtherNames";
import Regions from "./pages/Regions";
import Flavor from "./pages/Flavor";
import Climate from "./pages/Climate";
import GrowingAltitude from "./pages/GrowingAltitude";
import HarvestingMethod from "./pages/HarvestingMethod";
import Varieties from "./pages/Varieties";
import NavBar from "./components/NavBar";
import ContextProvider from "./context/Context";

// export default function App () {
//   // We will use the Route component to specify each route
//   return (
//     <div className="App">
//     <Routes>
//       <Route path="/" element={<Main/>}/>
//       <Route path="/currencies" element={<Currencies/>}/>
//       <Route path="/price" element={<Price/>}/>
//     </Routes>
//     </div>
//   );
// }

// import logo from "./logo.svg";
import "./App.css";
import CatDisplay from "./components/Cat";

// import Form from "./components/Form";
import { useState, useEffect } from "react";
import Main from "./components/Main";
function App() {
  // -------->Establish State
  const [pet, setPet] = useState({});

  // ------------------------Functions

  const getCat = async () => {
    const response = await fetch(`https://coffee-type-api.web.app/coffee`);

    const data = await response.json();
    console.log(data);
    setPet(data);
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="App">
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/Home" element={<Main />} />
          <Route path="/Climate" element={<Climate />} />
          <Route path="/Flavor" element={<Flavor />} />
          <Route path="/Growing Altitude" element={<GrowingAltitude />} />
          <Route path="/Harvesting Method" element={<HarvestingMethod />} />
          <Route path="/Other Names" element={<OtherNames />} />
          <Route path="/Regions" element={<Regions />} />
          <Route path="/Varieties" element={<Varieties />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
