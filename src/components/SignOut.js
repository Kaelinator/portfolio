import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

export default class SignOut extends Component {
  state = {
    error: null,
  }

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase.auth()
      .signOut()
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <button type="button" onClick={this.signOut}>Sign out</button>
        {error && `Error signing out: ${error}`}
      </div>
    );
  }
}
