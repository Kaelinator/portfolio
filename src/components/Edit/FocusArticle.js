import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/storage';

import { TextArea, Label } from '../Form/Form';
import EditAsset from './EditAsset';

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

const Body = styled.form`
  grid-area: body;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Assets = styled.ul`
  grid-area: assets;
  margin: 0;
`;

export default class FocusArticle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: '',
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
  }


  componentDidMount() {
    const { id } = this.props;

    if (!id) return;

    const assetsRef = firebase.storage().ref().child(id);

    const bodyRef = assetsRef.child('body.md');

    const reader = new FileReader();
    reader.addEventListener('loadend', e => this.setState({ body: e.srcElement.result, bodyLoaded: true }));

    bodyRef.getDownloadURL()
      .then(url => fetch(url))
      .then(res => res.blob())
      .then(blob => reader.readAsText(blob))
      .catch(({ code }) => (
        (code === 'storage/object-not-found'
          ? this.setState({ body: '', bodyLoaded: true })
          : console.log(code))
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
    const { title } = this.props;
    const { body, bodyLoaded, bodySaved } = this.state;
    return (
      <>
        <Heading>
          <Title>{title}</Title>
          {bodySaved && <small>Saved</small>}
        </Heading>

        <Body>
          <Label htmlFor="body"><Subtitle>Body</Subtitle></Label>
          <TextArea id="body" onChange={this.handleChange} value={body} disabled={!bodyLoaded} />
        </Body>

        <Assets>
          <Subtitle>Assets</Subtitle>
          <EditAsset />
        </Assets>
      </>
    );
  }
}
