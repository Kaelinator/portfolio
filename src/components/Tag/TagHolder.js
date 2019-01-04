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
      tags: tags.map(tag => ({ tag, active: true })),
    };

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(tagIndex) {
    const { onStatusChange } = this.props;
    return (active) => {
      const { tags } = this.state;
      const updatedTags = [
        ...tags.slice(0, tagIndex),
        { tag: tags[tagIndex].tag, active },
        ...tags.slice(tagIndex + 1),
      ];

      onStatusChange(updatedTags);
      this.setState({ tags: updatedTags });
    };
  }

  render() {
    const { tags } = this.props;
    return (
      <Horizontal>
        {
          tags.map((tag, i) => (
            <Tag tag={tag} key={tag} onClick={this.onStatusChange(i)} clickable />
          ))
        }
      </Horizontal>
    );
  }
}
