import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tag from './Tag';

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


export default class TagHolder extends Component {
  static propTypes = {
    tags: PropTypes.array,
    onStatusChange: PropTypes.func,
  };

  static defaultProps = {
    tags: [],
    onStatusChange: () => {},
  };

  constructor(props) {
    super(props);
    const { tags } = this.props;

    this.state = {
      statuses: Array(tags.length).fill(true),
    };

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(tagIndex) {
    return () => {
      const { onStatusChange, tags } = this.props;
      const { statuses } = this.state;

      const updatedStatuses = [
        ...statuses.slice(0, tagIndex),
        !statuses[tagIndex],
        ...statuses.slice(tagIndex + 1),
      ];

      const activeTags = updatedStatuses
        .filter(active => active)
        .map((_, i) => tags[i]);

      onStatusChange(activeTags);
      this.setState({ statuses: updatedStatuses });
    };
  }

  render() {
    const { tags } = this.props;
    const { statuses } = this.state;
    return (
      <Horizontal>
        {
          tags.map((tag, i) => (
            <Tag
              tag={tag}
              key={tag}
              onClick={this.onStatusChange(i)}
              active={statuses[i]}
              clickable
            />
          ))
        }
      </Horizontal>
    );
  }
}
