import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, ActionRow, Submit } from '../Form/Form';

export default class AssetForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    // const {
    //   color, accent, name, id,
    // } = this.props;

    // this.state = {
    //   color, accent, name, id,
    // };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.delete = this.delete.bind(this);
  }

  submit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  cancel() {
    const { onSubmit } = this.props;
    onSubmit({ cancel: true });
  }

  delete() {
    const { onSubmit } = this.props;
    const { id } = this.state;
    onSubmit({ id, delete: true });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={e => e.preventDefault()}>

        <ActionRow>
          <Submit type="submit" value="Cancel" onClick={this.cancel} />
          <Submit type="submit" className="danger" value="Delete" onClick={this.delete} />
          <Submit type="submit" className="primary" value="Done" onClick={this.submit} />
        </ActionRow>
      </Form>
    );
  }
}
