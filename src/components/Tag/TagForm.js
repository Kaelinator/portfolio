import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form, Text, Label, Submit, Color, Section, ActionRow,
} from '../Form/Form';


const Title = styled.h1`
  font-size: 2em;
  font-family: arial;
`;

export default class TagForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string,
    color: PropTypes.string,
    accent: PropTypes.string,
    name: PropTypes.string,
  }

  static defaultProps = {
    id: null,
    color: '#999999',
    accent: '#444444',
    name: '',
  }

  constructor(props) {
    super(props);

    const {
      color, accent, name, id,
    } = this.props;

    this.state = {
      color, accent, name, id,
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
    const { color, accent, name } = this.state;
    return (
      <Form onSubmit={e => e.preventDefault()}>

        <Title>Edit Tag</Title>

        <Section>
          <Label htmlFor="color">Color:</Label>
          <Color type="color" id="color" value={color} onChange={this.handleChange} />

          <Label htmlFor="accent">Accent:</Label>
          <Color type="color" id="accent" value={accent} onChange={this.handleChange} />
        </Section>

        <div>
          <Label htmlFor="name">Tag:</Label>
          <Text type="text" id="name" value={name} onChange={this.handleChange} autoFocus />
        </div>

        <ActionRow>
          <Submit type="submit" value="Cancel" onClick={this.cancel} />
          <Submit type="submit" className="danger" value="Delete" onClick={this.delete} />
          <Submit type="submit" className="primary" value="Done" onClick={this.submit} />
        </ActionRow>
      </Form>
    );
  }
}
