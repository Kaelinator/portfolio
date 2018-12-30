import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  border-radius: 4px;
  padding: 2px;
  font-family: arial;
  border-style: solid;
  border-width: 2px;
  text-align: center;
`;

const Tag = ({ color, accent, children }) => (
  <Wrapper style={{ backgroundColor: color, borderColor: accent }}>
    {children}
  </Wrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  accent: PropTypes.string,
  children: PropTypes.array,
};

Tag.defaultProps = {
  color: '#999',
  accent: '#000',
  children: '',
};

export default Tag;
