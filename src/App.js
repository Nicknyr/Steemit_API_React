import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import steem from 'steem';

class App extends Component {

  componentDidMount() {
    axios.get('https://api.steemjs.com/getContent?author=dollarvigilante&permlink=could-steem-be-the-gateway-drug-to-mainstream-cryptocurrency-usage-and-the-end-of-central-banks-and-government')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });

    steem.api.getAccounts(['nicknyr'], function(err, result) {
      console.log(err, result);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
