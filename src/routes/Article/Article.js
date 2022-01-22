import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Markdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

// import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import ArticleLayout from './ArticleLayout';
import ArticleCard from '../../components/Article/ArticleCard';
import Tag from '../../components/Tag/Tag';

const Title = styled.h1`
  font-size: 3em;
  font-family: sans-serif;
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
  font-family: sans-serif;
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
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    subtitle: PropTypes.string,
    markdown: PropTypes.string,
    history: PropTypes.array,
    tags: PropTypes.arrayOf(PropTypes.string),
    related: PropTypes.array,
  };

  static defaultProps = {
    id: null,
    subtitle: null,
    markdown: null,
    history: [],
    tags: [],
    related: [],
  };

  state = {
    markdown: null,
  }

  constructor(props) {
    super(props);
    this.fetchBody = this.fetchBody.bind(this);
  }

  componentDidMount() {
    this.fetchBody();
  }

  componentDidUpdate() {
    this.fetchBody();
  }

  fetchBody() {
    const { markdown } = this.state;
    const { id } = this.props;

    if (!id || markdown !== null) return;

    // const markdownRef = firebase.storage().ref().child(id).child('body.md');
    const storage = getStorage();
    const markdownRef = ref(storage, `${id}/body.md`);

    const reader = new FileReader();
    reader.addEventListener('loadend', e => this.setState({ markdown: e.srcElement.result }));

    getDownloadURL(markdownRef)
      .then(url => fetch(url))
      .then(res => res.blob())
      .then(blob => reader.readAsText(blob))
      .catch(err => this.setState({ markdown: `Error! \`${err.code}\`\n\n\`\`\`${err.message}\`\`\`` }));
  }

  render() {
    const {
      title, subtitle, tags, related,
    } = this.props;

    const { markdown } = this.state;

    const meta = {
      title,
      description: subtitle,
    };

    return (
      <DocumentMeta {...meta}>
        <ArticleLayout>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Tags>
            {tags.map(tag => <Tag id={tag} key={tag} />)}
          </Tags>
          <Body className="markdown-body"><Markdown source={markdown} escapeHtml={false} /></Body>
          <Related>
            {
                related.map(({ id, ...article }) => <ArticleCard key={id} {...article} />)
              }
          </Related>
        </ArticleLayout>
      </DocumentMeta>
    );
  }
}
