import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import steem from 'steem';
import dsteem from 'dsteem';
import { Client } from 'dsteem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: ['hi']
    }
  }


  componentDidMount() {
    const client = new Client('https://api.steemit.com')

    var query = {
        tag: 'steemitblog', // This tag is used to filter the results by a specific post tag
        limit: 5, // This limit allows us to limit the overall results returned to 5
    };

    client.database
       .getDiscussions('blog', query)
       .then(result => {
         this.setState({ userData: result});
       });
  }



  render() {
  // const data = this.state.userData;
  //  console.log("Hi I am data" + data);
   console.log(this.state.userData);
    return (
      <div className="App">
        {this.setState.userData}
      </div>
    );
  }
}

export default App;
