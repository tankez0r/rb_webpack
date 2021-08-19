import React, { Fragment } from "react";
import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
         Hola gordito comenza a trabajar en componentes y despues
         mandale mecha.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Fragment>
  );
};

export default App;
