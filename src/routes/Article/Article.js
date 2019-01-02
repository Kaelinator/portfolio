import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Markdown from 'react-markdown';

import ArticleLayout from './ArticleLayout';
import { Tag } from '../../components/Tag';

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
`;

export default class Article extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    markdown: Array(100).fill('This is my markdown!').join(' '),
    tags: [
      <Tag key={2} color="#22DDEE" accent="#00BBCC">Coding</Tag>,
      <Tag key={3} color="#55EE22" accent="#33CC00">Creating</Tag>,
    ],
  }

  render() {
    const { match } = this.props;
    const { markdown, tags } = this.state;
    return (
      <ArticleLayout>
        <Title>{`Article ${match.params.articleId}`}</Title>
        <Subtitle>{`You had better believe that this is article ${match.params.articleId}`}</Subtitle>
        <Tags>{tags}</Tags>
        <Body><Markdown source={markdown} /></Body>
      </ArticleLayout>
    );
  }
}
