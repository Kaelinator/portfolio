import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';


const Wrapper = styled.header`
  display: grid;
  grid-template-rows: auto 1fr auto;
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
  max-height: 128px;     /* fallback */
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
`;

const Tags = styled.div`
  overflow: hidden;
  flex-flow: row wrap;
  display: flex;
  align-items: stretch;
  & > button {
    height: 10px;
    width: 50px;
    overflow: hidden;
    font-size: 0;
    margin: 0;
  }
`;

const wrapIfLink = (url, content) => (url === '' ? content() : <Link to={{ pathname: `/${url}` }}>{content()}</Link>);

const ArticleCard = ({
  url, title, subtitle, tags,
}) => (
  <article>
    <div>
      {wrapIfLink(url, () => (
        <Wrapper>
          <Tags>
            { tags.map(tag => <Tag id={tag} key={tag} />) }
          </Tags>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      ))}
    </div>
  </article>
);

ArticleCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tags: PropTypes.array,
};

ArticleCard.defaultProps = {
  url: '',
  title: '',
  subtitle: '',
  tags: [],
};

export default ArticleCard;
