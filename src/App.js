import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    // BEM
    <div className="app">
      {/* <h1>Hello</h1> */}
      <Router>
        <Header />

        <Switch>
          <Router path="/search">
            <SearchPage />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>

        <Footer />
      </Router>

      {/* Home */}
      {/* Header */}

      {/* Banner */}
      {/* Search */}

      {/* Cards */}

      {/* Footer */}

      {/* SearchPage */}
      {/*---*/}
    </div>
  );
}

export default App;
