import React, { useEffect } from "react";
import About from "./pages/About";
import { Helmet } from "react-helmet";
import Home from "./pages/index";
import favicon from "./favicon.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      getAccount();
    }
    const ethereumButton = document.querySelector(".enableEthereumButton");
    const walletnumber = document.getElementById("walletnumber");

    ethereumButton.addEventListener("click", () => {
      getAccount();
    });

    async function getAccount() {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      walletnumber.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000"></meta>
        <meta name="msapplication-navbutton-color" content="#000"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#000"
        ></meta>
      </Helmet>
      <div className="App">
        <div className="nav">
          <Link to="/">
            <img src={favicon} alt="favicon"></img>
          </Link>
          <Link to="/">
            <h3 id="home">Home</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/">
            <button id="unlockbutton" className="enableEthereumButton">
              <h3 id="walletnumber">Unlock Wallet</h3>
            </button>
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
