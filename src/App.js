import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cards from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="text-center">
      <div>
        <Header />
        <Hero />
      </div>
      
      <div className="container">
        <Search />
       
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {["quesadilla", "burger", "lasagna", "paella", "cake", "meal", "quesadilla", "lasagna", "paella", "cake", "paella", "meal"].map(
            function (item) {
              return <Cards imageSource={item} />;
            }
          )}
        </div>
      </div>

    
    <div className="d-flex justify-content-end" style={{position: "fixed", bottom: 0, right: 1}}>
      <iframe 
        title="Senna Chatbot"
        width="350" 
        height="430"
        allow="microphone;"
        expand="false"

        src="https://console.dialogflow.com/api-client/demo/embedded/dbc245c4-ce7e-412f-92dd-dc48156f0e22"
      />
    </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
