import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const Title = styled.h2`
  font: 2em 'Open Sans', sans-serif;
  padding: 0 5px 0 5px;
  margin: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  hyphens: auto;
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
  hyphens: auto;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;     /* fallback */
  max-height: 48px;      /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const getBackground = colors => ['45deg', '135deg', '225deg', '315deg']
  .slice(0, colors.length)
  .map((direction, i) => `linear-gradient(${direction}, ${colors[i]}, rgba(0, 0, 0, 0))`)
  .join(',');

const ArticleCard = ({
  id, title, subtitle, colors,
}) => (
  <Link to={`/${id}`}>
    <Wrapper style={{ background: getBackground(colors) }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  </Link>
);

ArticleCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  colors: PropTypes.array,
};

ArticleCard.defaultProps = {
  id: 'not-found',
  title: '',
  subtitle: '',
  colors: [],
};

export default ArticleCard;