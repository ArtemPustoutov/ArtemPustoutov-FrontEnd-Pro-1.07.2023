import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CentralBlock from "./components/CentralBlock/CentralBlock";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <CentralBlock/>
    </div>
  );
}

export default App;
