import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: status;
  font-size: 1em;
  height: 40px;
`;

const Button = styled.button`
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
`;

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
      <Wrapper>
        <Button type="button" onClick={this.signOut}>Sign out</Button>
        {error && `Error signing out: ${error}`}
      </Wrapper>
    );
  }
}
