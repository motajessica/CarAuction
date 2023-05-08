import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cards from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";
import UploadImage from "./components/UploadImage.js";

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero/>  
      <div className="container">
        <Search />
        <UploadImage />
      </div>
      
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {[
            "suv",
            "hatchback",
            "wagon",
            "utility",
            "coupe",
            "sedan1",
            "van",
            "convertible1",
            "utility",
            "suv",
            "coupe",
            "wagon",
          ].map(function (item) {
            return <Cards carType={item} />;
          })}
        </div>
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ position: "fixed", bottom: 0, right: 1 }}
      >
        <df-messenger
          chat-icon=""
          chat-title="Senna"
          agent-id="dbc245c4-ce7e-412f-92dd-dc48156f0e22"
          language-code="en"
        ></df-messenger>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
