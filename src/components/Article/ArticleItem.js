import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.li`
  list-style: none;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  margin: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  background-color: ${props => (props.visible ? 'white' : 'grey')}
  color: #1F1F20;
`;

const Heading = styled.div`
  display: flex;
  align-items: baseline;
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

const Control = styled.div`
  margin: 0 5px 0 5px;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  align-self: stretch;

  & > button:first-child {
    border-right: 1px dashed white;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  & > button:last-child {
    border-left: none;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
`;

const ArticleItem = ({
  url, title, onEdit, onWrite, visible,
}) => (
  <Wrapper visible={visible}>
    <Heading>
      <Title>{title}</Title>
      <Small>{`/${url}`}</Small>
    </Heading>

    <Control>
      <Button type="button" onClick={onEdit}>Edit</Button>
      <Button type="button" onClick={onWrite}>Write</Button>
    </Control>
  </Wrapper>
);

ArticleItem.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onWrite: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
};

ArticleItem.defaultProps = {
  visible: true,
  title: '',
};

export default ArticleItem;
