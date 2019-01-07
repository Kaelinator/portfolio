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
  margin: 5px;
  flex-shrink: 0;
`;

export default class Tag extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    clickable: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
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
    const { id, clickable, active } = this.props;

    const cursor = { cursor: clickable ? 'pointer' : 'context-menu' };

    return (
      <TagContext.Consumer>
        {({ dataOf }) => {
          const { color, accent, name } = dataOf(id);
          return (
            <Wrapper
              onClick={this.handleClick}
              style={active
                ? { backgroundColor: color, borderColor: accent, ...cursor }
                : cursor
            }
            >
              {name}
            </Wrapper>
          );
        }}
      </TagContext.Consumer>
    );
  }
}
