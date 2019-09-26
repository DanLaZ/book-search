import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//Pages
import searchPage from './pages/search';
// import savedBooks from './pages/saved';
import test from './pages/test';

function App() {
  return (
    <Router>
      <Route exact path="/" component={searchPage} />
      <Route exact path="/search" component={searchPage} />
      <Route exact path="/saved" component={test} />
      <Route exact path="/test" component={test} />
    </Router>
  );
}

export default App;
