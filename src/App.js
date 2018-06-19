import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import steem from 'steem';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import GetPosts from './GetPosts';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <GetPosts />
      </div>
    );
  }
}

export default App;
