import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Reviews from "./Reviews";
import Rating from "./Rating";
import Sentiment from "./Sentiment";
import Visitors from "./Visitors";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Reviews />
        <Rating />
        <Sentiment />
        <Visitors />
      </div>
    );
  }
}

export default App;
