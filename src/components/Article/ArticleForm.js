import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Header, ActionRow, Submit, Label, Text, Select, Option, Checkbox,
} from '../Form/Form';
import { TagContext } from '../Tag/TagProvider';

export default class ArticleForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string,
    url: PropTypes.string,
    visible: PropTypes.bool,
    tags: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  static defaultProps = {
    id: null,
    url: '',
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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
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

  handleSelectChange(event) {
    const selectedValues = [...event.target.options].filter(o => o.selected).map(o => o.value);

    this.setState({ [event.target.id]: selectedValues });
  }

  handleCheckChange(event) {
    this.setState({ [event.target.id]: event.target.checked });
  }

  render() {
    const {
      url, title, subtitle, tags, visible,
    } = this.state;
    console.log(this.state);
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <Header>Edit Article</Header>

        <div>
          <Label htmlFor="title">Title:</Label>
          <Text type="text" id="title" value={title} onChange={this.handleChange} />
        </div>

        <div>
          <Label htmlFor="subtitle">Subtitle:</Label>
          <Text type="text" id="subtitle" value={subtitle} onChange={this.handleChange} />
        </div>

        <div>
          <Label htmlFor="url">URL:</Label>
          <Text type="text" id="url" value={url} onChange={this.handleChange} />
        </div>

        <Label htmlFor="tags">Tags:</Label>
        <Select multiple id="tags" onChange={this.handleSelectChange} value={tags}>
          <TagContext.Consumer>
            {
              ({ tags: allTags }) => (
                allTags.map(({ name, id }) => <Option key={id} value={id}>{name}</Option>)
              )
            }
          </TagContext.Consumer>
        </Select>

        <div>
          <Checkbox type="checkbox" id="visible" onChange={this.handleCheckChange} checked={visible} />
          <Label htmlFor="visible">Visible</Label>
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
