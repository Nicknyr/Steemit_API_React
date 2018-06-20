import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';


class MyPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPosts: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

    client.database
      .getState('@ned')
      .then(result => {
        this.setState({ myPosts: result });
      })
  }

  render() {
    console.log(this.state.myPosts);

    const data = this.state.myPosts;

    const display = Object.keys(data).map((d, key) => {
    return (
      <div className="my-posts">
        <li key={key}>
          {data.current_route}
        </li>
      </div>
      );
    });

    return(
      <div>
        <ul>
          { display }
        </ul>
      </div>
    );
  }



}


export default MyPosts;
