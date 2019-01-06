import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

export default class PrivateRoute extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const unsubscribe = firebase.auth()
      .onAuthStateChanged(user => this.setState({ signedIn: !!user, loading: false }));

    this.state = {
      signedIn: firebase.auth().currentUser !== null,
      loading: true,
      unsubscribe,
    };
  }


  componentWillUnmount() {
    const { unsubscribe } = this.state;
    unsubscribe();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { signedIn, loading } = this.state;

    if (loading) return <h1>Loading</h1>;

    return (
      <Route
        {...rest}
        render={props => (signedIn
          ? <Component {...props} {...rest} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        }
      />
    );
  }
}
