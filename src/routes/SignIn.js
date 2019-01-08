import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Redirect } from 'react-router-dom';
import {
  Label, Text, Submit, Section, Form, Header,
} from '../components/Form/Form';
import ModalManager from '../components/ModalManager';

export default class SignIn extends Component {
  static propTypes = {
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
    modalVisible: false,
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ modalVisible: true });
  }

  onSubmit(event) {
    event.preventDefault();
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
      email, password, authSuccess, error, modalVisible,
    } = this.state;

    if (authSuccess) return <Redirect to={from} />;

    return (
      <ModalManager
        visible={modalVisible}
        modal={(
          <Form onSubmit={this.onSubmit}>
            { error && <span>Failed to sign in</span> }

            <Header>Authenticate</Header>

            <Section>
              <Label htmlFor="email">Email:</Label>
              <Text type="text" id="email" value={email} onChange={this.handleChange} />
            </Section>

            <Section>
              <Label htmlFor="password">Password:</Label>
              <Text type="password" id="password" value={password} onChange={this.handleChange} />
            </Section>

            <Submit type="submit" className="primary" value="Sign in" />
          </Form>
        )}
      />
    );
  }
}
