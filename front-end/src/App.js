import React, { Component } from "react";
import "./App.css";
import PasswordComponent from "./components/PasswordComponent";

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Password Service</h1>
        </header>

        <PasswordComponent />

      </div>
    );
  }
}

export default App;
