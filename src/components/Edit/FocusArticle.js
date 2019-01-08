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
    markdown: '',
    markdownLoaded: false,
    bodySaved: false,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    const { id } = this.props;

    if (!id) return;

    const assetsRef = firebase.storage().ref().child(id);

    const markdownRef = assetsRef.child('body.md');

    const reader = new FileReader();
    reader.addEventListener('loadend', e => this.setState({ markdown: e.srcElement.result, markdownLoaded: true }));

    markdownRef.getDownloadURL()
      .then(url => fetch(url))
      .then(res => res.blob())
      .then(blob => reader.readAsText(blob))
      .catch(({ code }) => console.log(code));
  }

  handleChange(event) {
    const markdown = event.target.value;
    const { id } = this.props;
    if (!id) return;

    const markdownRef = firebase.storage().ref().child(id).child('body.md');

    const blob = new Blob([markdown], { type: 'text/markdown' });

    markdownRef.put(blob, { contentType: 'text/markdown' })
      .then(() => this.setState({ bodySaved: true }));

    this.setState({ markdown, bodySaved: false });
  }

  render() {
    const { title } = this.props;
    const { markdown, markdownLoaded, bodySaved } = this.state;
    return (
      <>
        <Heading>
          <Title>{title}</Title>
          {bodySaved && <small>Saved</small>}
        </Heading>

        <Body>
          <Label htmlFor="markdown"><Subtitle>Body</Subtitle></Label>
          <TextArea id="markdown" onChange={this.handleChange} value={markdown} disabled={!markdownLoaded} />
        </Body>

        <Assets>
          <Subtitle>Assets</Subtitle>
          <EditAsset />
        </Assets>
      </>
    );
  }
}
