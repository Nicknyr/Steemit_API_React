import React, { Component } from "react";
import dsteem from "dsteem";
import { Client } from "dsteem";
import Markdown from 'markdown-to-jsx';
import compiler from 'markdown-to-jsx';

class MyPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPosts: [],
      data: []
    };
  }

  componentDidMount() {
    const client = new Client("https://api.steemit.com");

    client.database
      .getState("@nicknyr")
      .then(result => {
        this.setState({ myPosts: result.content });

        this.setState({ data: result})
    });
  }

  render() {
    const posts = Object.keys(this.state.myPosts);
    console.log(posts);

    console.log(this.state.myPosts);

    let page = posts.map((post, i) => {
      return (
        this.state.myPosts[posts[i]]["category"] === "utopian-io"
        ?
          <div className="content-container">
            <p>
              <strong>Author: {this.state.myPosts[posts[i]]["author"]}</strong>
            </p>
            <p>
              <strong>Title: {this.state.myPosts[posts[i]]["title"]}</strong>
            </p>
            <p>
              <strong>Payout: {this.state.myPosts[posts[i]]["total_payout_value"]}</strong>
            </p>
            <p>{this.state.myPosts[posts[i]]["created"]}</p>
            <p><span>Category: </span>{this.state.myPosts[posts[i]]["category"]}</p>

            <p>{/*this.state.myPosts[posts[i]]["body"]*/}</p>

            <p>{this.state.myPosts[posts[i]][""]}</p>

            <p><a href={`https://www.steemit.com`+this.state.myPosts[posts[i]]["url"]}>The Post</a></p>



          </div>
        :
        null

      );
    });

    return (
        <div>
          {page}
        </div>
    );
  }
}

export default MyPosts;
