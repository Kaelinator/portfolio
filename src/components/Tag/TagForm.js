import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TagForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    color: '#999999',
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { color } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="color">
          <input type="color" id="color" value={color} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Done" />
      </form>
    );
  }
}
