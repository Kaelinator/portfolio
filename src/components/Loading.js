import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  static defaultProps = {
    message: 'Please wait',
  }

  render() {
    const { message } = this.props;
    return (
      <>
        <h1>Loading</h1>
        <h2>{message}</h2>
      </>
    );
  }
}
