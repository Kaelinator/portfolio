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
    onClick: PropTypes.func,
  };

  static defaultProps = {
    tag: '',
    clickable: false,
    onClick: () => {},
  };

  state = {
    active: true,
  }

  constructor(props) {
    super(props);

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    const { clickable, onClick } = this.props;
    const { active } = this.state;

    if (!clickable) return;

    onClick(!active);
    this.setState({ active: !active });
  }

  render() {
    const { tag, clickable } = this.props;
    const { active } = this.state;

    const cursor = { cursor: clickable ? 'pointer' : 'context-menu' };

    return (
      <TagContext.Consumer>
        {({ dataOf }) => (
          <Wrapper
            onClick={this.toggleActive}
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
