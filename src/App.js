import React from "react";
import ReactLogo from "./react.logo.svg";
import ElectronLogo from "./electron.logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-text">Electron-React App Template</p>
        <div class="logo-container">
          <img src={ReactLogo} className="React-logo" alt="react" />
          <img src={ElectronLogo} className="Electron-logo" alt="electron" />
        </div>
        <footer>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Press Ctrl+Shift+I to toogle Developer Tools</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
