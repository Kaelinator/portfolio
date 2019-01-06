import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

export default class SignIn extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    location: PropTypes.object,
  }

  static defaultProps = {
    location: { state: { from: { pathname: '/e' } } },
  }

  state = {
    email: '',
    password: '',
    authSuccess: false,
    error: null,
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.setState({ authSuccess: true }))
      .catch(err => this.setState({ error: err.code }));
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { location } = this.props;
    const { from } = location.state;
    const {
      email, password, authSuccess, error,
    } = this.state;

    if (authSuccess) return <Redirect to={from} />;

    return (
      <form onSubmit={this.onSubmit}>
        { error && <span>Failed to sign in</span> }
        <label htmlFor="email">
          <span>Email:</span>
          <input type="text" id="email" value={email} onChange={this.handleChange} />
        </label>

        <label htmlFor="password">
          <span>Password:</span>
          <input type="password" id="password" value={password} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Sign in" />
      </form>
    );
  }
}
