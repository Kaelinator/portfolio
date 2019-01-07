import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.li`
  list-style: none;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background-color: ${props => (props.visible ? 'white' : 'grey')}
  color: #1F1F20;
`;

const Title = styled.h3`
  font-family: arial;
  font-size: 2em;
  margin: 0 5px 0 10px;
`;

const Small = styled.h5`
  margin: 0 10px 0 5px;
  font-size: 1em;
  font-family: arial;
  color: #3A3A3A;
`;

const ArticleItem = ({
  url, title, onClick, visible,
}) => (
  <Wrapper onClick={onClick} visible={visible}>
    <Title>{title}</Title>
    <Small>{`/${url}`}</Small>
  </Wrapper>
);

ArticleItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
};

ArticleItem.defaultProps = {
  visible: true,
  title: '',
};

export default ArticleItem;
