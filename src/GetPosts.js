import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';

class GetPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      hotPostsFunny: [],
      funnyActive: [],
      myPosts: [],
      getMyState: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

    // Gets posts from Utopian-io
    var query = {
        tag: 'utopian-io', // This tag is used to filter the results by a specific post tag
        limit: 5, // This limit allows us to limit the overall results returned to 5
    };

    client.database
       .getDiscussions('blog', query)
       .then(result => {
         this.setState({ userData: result});
       });



    // Gets 'hot' posts from '/funny'
    var funny = {
      tag: 'funny',
      limit: 5
    }

    client.database
      .getDiscussions('hot', funny)
      .then(result => {
        this.setState({ hotPostsFunny: result});
      })


      // Active tag is weird. Returns some new posts and some recently commented upon post. I think.
      var funnyActive = {
        tag: 'funny',
        limit: 5
      }

      client.database
        .getDiscussions('active', funnyActive)
        .then(result => {
          this.setState({ funnyActive: result});
        })


    // Gets my account details but not posts
    var myPosts = {

    }


    // Successfully gets my posts via content.[name of post]
    client.database
      .getAccounts(['ned'], myPosts)
      .then(result => {
        this.setState({ myPosts: result });
      })



      client.database
        .getState('@ned')
        .then(result => {
          this.setState({ getMyState: result});
        })

  }


  render() {
   //console.log(this.state.userData);
   //console.log(this.state.hotPostsFunny);
   //console.log(this.state.funnyActive);
   //console.log(this.state.myPosts);
   console.log(this.state.getMyState);
   const data = this.state.userData;

   const display = Object.keys(data).map((d, key) => {
     //console.log(data[key]);
     return (
       <div className="blog-posts">
        <li key={key}>
        <h3>Author</h3>  {data[key].author}<br/>
        <h3>Post</h3>  {data[key].body} <br/>
        <h3>Active Votes</h3> {data[key].active_votes.length}
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
