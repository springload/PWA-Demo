import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import './sass/styles.css';

import Form from './Form'

const Header = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-title">PWA Demo</h1>
    </header>
  </div>
);

const Home = () => (
  <div className="app-info">
    <p>Welcome</p>
    <p className="btn"><Link to="/form">Start</Link></p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/form" component={Form} />
        </Router>
      </div>
    );
  }
}

export default App;
