import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/netflix-show" component={NetflixShow}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
