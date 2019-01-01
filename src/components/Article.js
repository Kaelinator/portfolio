import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import shuffle from 'array-shuffle';
import Card from './Card';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 200px;
  border-radius: inherit;
  background-color: white;
`;

const Title = styled.h2`
  font: 2em 'Open Sans', sans-serif;
  padding: 0 5px 0 5px;
  margin: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 32px;     /* fallback */
  max-height: 128px;      /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Subtitle = styled.p`
  font: 1em 'Open Sans', sans-serif;
  padding: 0 5px 0 5px;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;     /* fallback */
  max-height: 48px;      /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const getBackground = colors => shuffle(['45deg', '135deg', '225deg', '315deg'])
  .slice(0, colors.length)
  .map((direction, i) => `linear-gradient(${direction}, ${colors[i]}, rgba(0, 0, 0, 0))`)
  .join(',');

const Article = ({ title, subtitle, colors }) => (
  <Card borderRadius="5px">
    <Wrapper style={{ background: getBackground(colors) }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  </Card>
);

Article.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  colors: PropTypes.array,
};

Article.defaultProps = {
  title: '',
  subtitle: '',
  colors: [],
};

export default Article;
