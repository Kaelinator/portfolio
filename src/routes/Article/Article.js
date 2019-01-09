import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Markdown from 'react-markdown';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import ArticleLayout from './ArticleLayout';
import ArticleCard from '../../components/Article/ArticleCard';
import Tag from '../../components/Tag/Tag';

import 'github-markdown-css';

const Title = styled.h1`
  font-size: 3em;
  font-family: 'Times New Roman', Times;
  margin-bottom: 0;
  overflow-wrap: break-word;
  width: 100%;
  overflow: hidden;
  hyphens: auto;
  grid-area: titl;
`;

const Body = styled.div`
  grid-area: text;
`;

const Subtitle = styled.h2`
  grid-area: subt;
  margin-top: 0;
`;

const Tags = styled.div`
  grid-area: tags;

  & > button:first-child {
    margin-left: 0;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const Related = styled.div`
  grid-area: foot;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

export default class Article extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    markdown: 'loading',
    title: 'loading',
    subtitle: 'loading',
    tags: [],
    related: [],
  }

  constructor(props) {
    super(props);

    this.emptyArticle = this.emptyArticle.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    if (!location.state) { this.emptyArticle(); return; }

    const { id } = location.state;
    if (!id) { this.emptyArticle(); return; }

    firebase.firestore()
      .collection('articles')
      .doc(id)
      .get()
      .then(doc => doc.data())
      .then(({ title, subtitle, tags }) => this.setState({ title, subtitle, tags }))
      .catch(this.emptyArticle);

    const markdownRef = firebase.storage().ref().child(id).child('body.md');

    const reader = new FileReader();
    reader.addEventListener('loadend', e => this.setState({ markdown: e.srcElement.result }));

    markdownRef.getDownloadURL()
      .then(url => fetch(url))
      .then(res => res.blob())
      .then(blob => reader.readAsText(blob))
      .catch(err => this.setState({ markdown: `Error! \`${err.code}\`\n\`\`\`${err.message}\`\`\`` }));
  }

  emptyArticle() {
    this.setState({
      title: '404: Article not found',
      subtitle: '',
      markdown: '',
    });
  }

  render() {
    const {
      markdown, tags, related, title, subtitle,
    } = this.state;
    return (
      <ArticleLayout>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Tags>
          {
          tags.map(tag => <Tag id={tag} />)
          }
        </Tags>
        <Body className="markdown-body"><Markdown source={markdown} escapeHtml={false} /></Body>
        <Related>
          {
            related.map(({ id, ...article }) => <ArticleCard key={id} {...article} />)
          }
        </Related>
      </ArticleLayout>
    );
  }
}
