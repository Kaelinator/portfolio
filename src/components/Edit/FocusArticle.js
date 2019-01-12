import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/storage';

import { TextArea, Label } from '../Form/Form';
import EditAssets from './EditAssets';

const Heading = styled.div`
  grid-area: article;
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: arial;
  margin: 0;
  margin-right: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-family: arial;
  margin: 0;
  margin-right: 10px;
`;

const Small = styled.small`
  color: green;
  font-weight: bold;
`;

const Body = styled.form`
  grid-area: body;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Assets = styled.div`
  grid-area: assets;
  margin: 0;
`;

export default class FocusArticle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    assets: PropTypes.array,
  }

  static defaultProps = {
    title: '',
    assets: [],
  };

  state = {
    body: '',
    bodyLoaded: false,
    bodySaved: false,
    bodyUploadTask: null,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.loadArticle = this.loadArticle.bind(this);
  }

  componentDidMount() {
    this.loadArticle();
  }


  componentDidUpdate() {
    const { bodyLoaded } = this.state;
    if (!bodyLoaded) this.loadArticle();
  }

  loadArticle() {
    const { id } = this.props;

    const bodyRef = firebase.storage().ref().child(id).child('body.md');

    const reader = new FileReader();
    reader.addEventListener('loadend', e => this.setState({ body: e.srcElement.result, bodyLoaded: true }));

    bodyRef.getDownloadURL()
      .then(url => fetch(url))
      .then(res => res.blob())
      .then(blob => reader.readAsText(blob))
      .catch(({ message, code }) => (
        (code === 'storage/object-not-found'
          ? this.setState({ body: '', bodyLoaded: true })
          : this.setState({ body: `${code}\n\n${message}` }))
      ));
  }

  handleChange(event) {
    const body = event.target.value;
    const { bodyUploadTask } = this.state;

    if (bodyUploadTask) bodyUploadTask.cancel(); // Don't upload two docs at same time

    const { id } = this.props;
    if (!id) return;

    const blob = new Blob([body], { type: 'text/markdown' });

    const bodyRef = firebase.storage().ref().child(id).child('body.md');

    const newUploadTask = bodyRef.put(blob, { contentType: 'text/markdown' });
    newUploadTask.then(() => this.setState({ bodySaved: true }));

    this.setState({ body, bodyUploadTask: newUploadTask, bodySaved: false });
  }

  render() {
    const { title, assets, id } = this.props;
    const {
      body, bodyLoaded, bodySaved,
    } = this.state;
    return (
      <>
        <Heading>
          <Title>{title}</Title>
          {bodySaved && <Small>Saved</Small>}
        </Heading>

        <Body>
          <Label htmlFor="body"><Subtitle>Body</Subtitle></Label>
          <TextArea id="body" onChange={this.handleChange} value={body} disabled={!bodyLoaded} />
        </Body>

        <Assets>
          <Subtitle>Assets</Subtitle>
          <EditAssets assets={assets} articleId={id} />
        </Assets>
      </>
    );
  }
}
