import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TagContext } from './TagProvider';


const Wrapper = styled.span`
  border-radius: 4px;
  padding: 2px;
  font-family: arial;
  border-style: solid;
  border-width: 2px;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  flex-shrink: 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Tag = ({ tag }) => (
  <TagContext.Consumer>
    {({ dataOf }) => (
      <Wrapper style={{ backgroundColor: dataOf(tag).color, borderColor: dataOf(tag).accent }}>
        {tag}
      </Wrapper>
    )}
  </TagContext.Consumer>
);

Tag.propTypes = {
  tag: PropTypes.string,
};

Tag.defaultProps = {
  tag: '',
};

export default Tag;
