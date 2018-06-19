import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';

class GetPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

    var query = {
        tag: 'utopian-io', // This tag is used to filter the results by a specific post tag
        limit: 5, // This limit allows us to limit the overall results returned to 5
    };

    client.database
       .getDiscussions('blog', query)
       .then(result => {
         this.setState({ userData: result});
       });
  }


  render() {
   console.log(this.state.userData);

   const data = this.state.userData;

   const display = Object.keys(data).map((d, key) => {
     console.log(data[key]);
     return (
       <div className="blog-posts">
        <li key={key}>
          {data[key].author}
          {data[key].body}
        </li>
       </div>
     );
   })

    return (
      <div className="App">
        <ul>
          {display}
        </ul>
      </div>
    );
  }
}

export default GetPosts;
