import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Code from "./pages/coding";
import Writing from "./pages/writing";
import Games from "./pages/games";
import Contact from "./pages/contact";
import News from "./pages/news";

function App() {
  return (
    <div className="App">
        <Router>
          <header className="App-header">
          <h1>William Rave</h1>
          </header>
          <Navbar></Navbar>
          <div className="App-body">
            <Route exact path ="/" component={HomePage}/>
            <Route exact path ="/coding" component = {Code}/>
            <Route exact path ="/writing" component = {Writing}/>
            <Route exact path ="/games" component = {Games}/>
            <Route exact path ="/contact" component = {Contact}/>
            <Route exact path ="/news" component = {News}/>
          </div>  
        </Router>
    </div>
  );
}

export default App;
