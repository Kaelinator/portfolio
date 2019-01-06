import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TagContext } from './TagProvider';


const Wrapper = styled.button`
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

export default class Tag extends Component {
  static propTypes = {
    tag: PropTypes.string,
    clickable: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    tag: '',
    active: true,
    clickable: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickable, onClick } = this.props;

    if (!clickable) return;

    onClick();
  }

  render() {
    const { tag, clickable, active } = this.props;

    const cursor = { cursor: clickable ? 'pointer' : 'context-menu' };

    return (
      <TagContext.Consumer>
        {({ dataOf }) => (
          <Wrapper
            onClick={this.handleClick}
            style={active
              ? { backgroundColor: dataOf(tag).color, borderColor: dataOf(tag).accent, ...cursor }
              : cursor
            }
          >
            {tag}
          </Wrapper>
        )}
      </TagContext.Consumer>
    );
  }
}
