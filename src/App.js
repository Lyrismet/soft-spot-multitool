
import React from 'react';
import './index.scss';
import Calculator from "./Components/Calculator/Calculator";


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__author-sign">
          <p className="header__clover">🍀</p>
          <p className="header__sign">built by <span>Lyrismet</span></p>
        </div>
        <div className="header__github-link">
          <a href="https://github.com/Lyrismet">GitHub Page</a>
        </div>
      </header>
      <main className="main">
        <div className="main__intro">
          <p className="main__text-morse">.-- . .-.. -.-. --- -- . -.-.--</p>
          <h1 className="main__title">Soft Spot</h1>
          <p className="main__subtitle">Your cozy companion</p>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt=""/>
        </div>
          <div className="main__buttons">
              <Calculator/>
              <button className="main__button-item yellow">To Do List</button>
              <button className="main__button-item blue">Weather</button>
              <button className="main__button-item pink">Joke's</button>

          </div>
      </main>
      <footer className="footer">
        <p className="footer__author">© 2023 Lyrismet</p>
      </footer>
    </div>
  );
}

export default App;
