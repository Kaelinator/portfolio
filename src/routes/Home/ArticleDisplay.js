import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import ArticleCard from '../../components/Article/ArticleCard';

const Item = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 150 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Results = styled.div`
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

const render = articles => (
  <PoseGroup>
    {
      articles
        .filter(({ visible }) => visible)
        .map(article => (
          <Item key={article.id}>
            <ArticleCard {...article} />
          </Item>
        ))
    }
  </PoseGroup>
);

const ArticleDisplay = ({ articles, search }) => (
  <>
    {
      search
        ? <Results>{render(match(articles, search))}</Results>
        : render(articles)
    }
  </>
);

ArticleDisplay.propTypes = {
  articles: PropTypes.array,
  search: PropTypes.string,
  // tags: PropTypes.array,
};

ArticleDisplay.defaultProps = {
  articles: [],
  search: '',
  // tags: [],
};

export default ArticleDisplay;
