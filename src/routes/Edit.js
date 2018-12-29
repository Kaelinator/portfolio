import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Edit extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
  }

  state = {
    signedIn: false,
  }

  constructor(props) {
    super(props);

    const { firebase } = this.props;

    firebase.auth().onAuthStateChanged(console.log);
    this.signIn = this.signIn.bind(this);
  }

  signIn(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[0].value;
    const { firebase } = this.props;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log('There was an error!', err));
    this.setState({ signedIn: true });
  }

  render() {
    const { signedIn } = this.state;
    return (
      <form onSubmit={this.signIn}>
        <label htmlFor="email">
          <span>Email:</span>
          <input type="text" id="email" />
        </label>

        <label htmlFor="password">
          <span>Password:</span>
          <input type="password" id="password" />
        </label>

        <input type="submit" value="Sign in" />

        { signedIn && <h1>Hello!</h1> }
      </form>
    );
  }
}
