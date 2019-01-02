import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  margin-right: 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


class TagHolder extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  static defaultProps = {
    children: [],
  };

  // constructor(props) {
  //   super(props);

  // }

  render() {
    const { children } = this.props;
    return (
      <Horizontal>
        {children}
      </Horizontal>
    );
  }
}

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

const Tag = ({ color, accent, children }) => (
  <Wrapper style={{ backgroundColor: color, borderColor: accent }}>
    {children}
  </Wrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  accent: PropTypes.string,
  children: PropTypes.string,
};

Tag.defaultProps = {
  color: '#999',
  accent: '#000',
  children: '',
};

export { Tag, TagHolder };
