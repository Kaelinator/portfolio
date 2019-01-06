import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import Loading from '../../components/Loading';

export default class PrivateRoute extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const authChangeUnsub = firebase.auth()
      .onAuthStateChanged(user => this.setState({ signedIn: !!user, loading: false }));

    this.state = {
      signedIn: false,
      loading: true,
      authChangeUnsub,
    };
  }


  componentWillUnmount() {
    const { authChangeUnsub } = this.state;
    authChangeUnsub();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { signedIn, loading } = this.state;

    if (loading) return <Loading />;

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
