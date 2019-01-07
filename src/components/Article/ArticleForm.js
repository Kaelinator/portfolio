import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Header, ActionRow, Submit,
} from '../Form/Form';

export default class ArticleForm extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string,
    visible: PropTypes.bool,
    tags: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  static defaultProps = {
    id: null,
    visible: true,
    tags: [],
    title: '',
    subtitle: '',
  };

  constructor(props) {
    super(props);

    const {
      url, visible, tags, title, subtitle, id,
    } = this.props;

    this.state = {
      url, visible, tags, title, subtitle, id,
    };

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
        <Header>Edit Article</Header>

        <ActionRow>
          <Submit type="submit" value="Cancel" onClick={this.cancel} />
          <Submit type="submit" className="danger" value="Delete" onClick={this.delete} />
          <Submit type="submit" className="primary" value="Done" onClick={this.submit} />
        </ActionRow>
      </Form>
    );
  }
}
