import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import CountriesList from "./components/CountriesList/CountriesList";

const App:React.FC = ()=> {
  return (
    <div className="container">
      <Header />
      <CountriesList />
    </div>
  );
}

export default App;
