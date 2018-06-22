import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import User from './User';
import jsonQuery from 'json-query';

class Utopian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      utopianCash: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

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
   console.log(this.state.utopianCash);

   var author = jsonQuery('[*][author]', { data: this.state.utopianCash }).value
   var title = jsonQuery('[*][title]', { data: this.state.utopianCash }).value
   var payout = jsonQuery('[*][total_payout_value]', { data: this.state.utopianCash }).value
   var postLink = jsonQuery('[*][url]', { data: this.state.utopianCash }).value
   var pendingPayout = jsonQuery('[*][pending_payout_value]', { data: this.state.utopianCash }).value
   var netVotes = jsonQuery('[*][net_votes]', { data: this.state.utopianCash }).value


   let display = utopian.map((post, i) => {
     return (
       <div className="utopian-items">
        <p>
          <strong>Author: </strong>
          {author[i]}
        </p>
        <p>
          <strong>Title: </strong>
            <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>
        </p>
        <p>
          <strong>Pending Payout: </strong>
            {pendingPayout[i]}
        </p>
        <p>
          <strong>Votes: </strong>
          {netVotes[i]}
        </p>
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
