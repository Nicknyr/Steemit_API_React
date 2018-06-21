/*import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import lodash from 'lodash';


class MyPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPosts: [],
      nestedObject: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

    client.database
      .getState('@ned')
      .then(result => {
        this.setState({ myPosts: result });
        this.setState({ nestedObject: result.content});
      })
  }

  render() {
    //console.log(this.state.myPosts);

    const posts = this.state.nestedObject;

    const display = Object.keys(posts).map(key =>
      <option value={key}>{posts[key]}</option>
    )


    return(
      <div>
        {display}
      </div>
    );
  }



}


export default MyPosts;
*/





import React, { Component } from "react";
import dsteem from "dsteem";
import { Client } from "dsteem";

class MyPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPosts: []
    };
  }

  componentDidMount() {
    const client = new Client("https://api.steemit.com");

    client.database.getState("@ned").then(result => {
      this.setState({ myPosts: result.content });
    });
  }

  render() {
    const posts = Object.keys(this.state.myPosts);
    console.log(posts);
    const onePost = this.state.myPosts[posts[0]];
    console.log(onePost)
    let page = posts.map((post, i) => {
      return (
        <div style={{ margin: "15px 15px 60px 15px " }}>
          <p>
            <strong>Author: {this.state.myPosts[posts[i]]["author"]}</strong>
          </p>
          <p>{this.state.myPosts[posts[i]]["permlink"]}</p>
          <p>{this.state.myPosts[posts[i]]["created"]}</p>
          <p>{this.state.myPosts[posts[i]]["body"]}</p>
        </div>
      );
    });

    // for (let i = 0; i < posts.length; i++) {
    //   console.log(this.state.myPosts[posts[i]]);
    //   console.log(Object.keys(this.state.myPosts[posts[i]]));
    //   console.log(this.state.myPosts[posts[i]]["author"]);
    //   console.log(this.state.myPosts[posts[i]]["body"]);
    // }

    return <div>{page}</div>;
  }
}

export default MyPosts;
