import React from "react";
import Test from './pages/test'
import Home from './pages/index'
import favicon from './favicon.png'
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/"><img src={favicon} alt="favicon"></img></Link>
          <Link to="/"><h3 id="home">Home</h3></Link>
          <Link to="/test"><h3>About</h3></Link>
          <Link to="/test"><button><h3>Unlock Wallet</h3></button></Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
