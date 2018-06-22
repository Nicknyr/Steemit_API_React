import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';
import jsonQuery from 'json-query';

class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      profile: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com');


    client.database
      .getState("@nicknyr")
      .then(result => {
        this.setState({ profile: result});
      })

  }




  render() {
    const userData = this.state.profile;

    var name = jsonQuery('accounts[*][name]', { data: userData }).value
    var meta = jsonQuery('accounts[*][json_metadata]', { data: userData }).value

    return (
      <div>
      
      </div>
    );
  }


}


export default User;
