import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import User from './User';
import jsonQuery from 'json-query';

class Utopian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      hotPostsFunny: [],
      funnyActive: [],
      myPosts: [],
      getMyState: [],
      dynamicGlobalProperties: [],
      utopianCash: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

  /*  // Gets posts from Utopian-io
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
    */

      var utopianMoney = {
        tag: 'utopian-io',
        limit: 20
      }

      client.database
        .getDiscussions('hot', utopianMoney)
        .then(result => {
          this.setState({ utopianCash: result});
        })


  }


  render() {
   const utopian = Object.keys(this.state.utopianCash);
   //console.log(utopian);

   console.log(this.state.utopianCash);

  /* var author = jsonQuery('[*][author]', { data: this.state.utopianCash }).value
   console.log(author);
   {author[i]}
  */


   let display = utopian.map((post, i) => {
     return (
       <div className="utopian-items">
        <p>
          <strong>Author: </strong>
            {this.state.utopianCash[utopian[i]]["author"]}
        </p>
        <p>
          <strong>Title: </strong>
            {this.state.utopianCash[utopian[i]]["title"]}
        </p>
        <p>
          <strong>Payout: </strong>
            {this.state.utopianCash[utopian[i]]["total_payout_value"]}
        </p>
        <p><a href={`https://www.steemit.com` + this.state.utopianCash[utopian[i]]["url"]}>The Post</a></p>
       </div>
     );
   });

    return (
      <div className="utopian-container">
        {display}
        <User />
      </div>
    );
  }
}

export default Utopian;
