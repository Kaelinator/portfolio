import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import ArticleCard from '../../components/Article/ArticleCard';

const Item = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 250 },
    delay: ({ index }) => index * 30,
  },
  exit: {
    opacity: 0,
    transition: { duration: 250 },
  },
  flip: {
    transition: {
      default: { type: 'tween', ease: 'circOut' },
    },
  },
});

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  grid-area: rslt;
`;

const match = (articles, search) => {
  const keywords = search.toLowerCase().split(/\W/);
  return articles.filter(({ title, subtitle }) => {
    const lTitle = title.toLowerCase();
    const lSub = subtitle.toLowerCase();
    return keywords.some(word => lTitle.includes(word) || lSub.includes(word));
  });
};

const filter = (articles, tagList) => (
  articles.filter(({ tags }) => tags.some(tag => !tagList.includes(tag)))
);

const render = articles => (
  <PoseGroup>
    {
      articles
        .filter(({ visible }) => visible)
        .map((article, i) => (
          <Item key={article.id} index={i}>
            <ArticleCard {...article} />
          </Item>
        ))
    }
  </PoseGroup>
);

const ArticleDisplay = ({ articles, search, tags }) => (
  <>
    {
      search
        ? <List>{render(filter(match(articles, search), tags))}</List>
        : render(filter(articles, tags))
    }
  </>
);

ArticleDisplay.propTypes = {
  articles: PropTypes.array,
  search: PropTypes.string,
  tags: PropTypes.array,
};

ArticleDisplay.defaultProps = {
  articles: [],
  search: '',
  tags: [],
};

export default ArticleDisplay;
