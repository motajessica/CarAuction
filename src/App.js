import { useEffect } from 'react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cards from "./components/Card.js";
import Search from "./components/Search.js"
import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <div className="App">
    <div className="header">
      <Header />
    </div>

      <div className="container">
        <h1>My Recipes</h1>
      </div>

      <div className="container">
        <Search /> 
      </div>

    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {
          ["quesadilla", "burger", "lasagna", "paella", "cake", "meal"].map(function(item) {
            return <Cards imageSource={item}/>
          })
        }
      </div>
    </div>
      
    <div className="footer">
      <Footer />
    </div>  

  </div>
  );
}

export default App;
