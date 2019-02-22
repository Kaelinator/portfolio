import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tag from './Tag';
import { TagContext } from './TagProvider';

const Horizontal = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  margin-right: 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > button:first-child {
    margin-left: 0;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;


class TagHolder extends Component {
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
      disabledTags: Array(tags.length).fill(true),
    };

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(tagId) {
    return () => {
      const { onStatusChange } = this.props;
      const { disabledTags } = this.state;

      const index = disabledTags.findIndex(id => id === tagId);


      const updatedStatuses = index === -1
        ? disabledTags.concat(tagId)
        : disabledTags.filter(id => id !== tagId);

      onStatusChange(updatedStatuses);
      this.setState({ disabledTags: updatedStatuses });
    };
  }

  render() {
    const { tags } = this.props;
    const { disabledTags } = this.state;
    return (
      <Horizontal>
        {
          tags.map(({ id }) => (
            <Tag
              id={id}
              key={id}
              onClick={this.onStatusChange(id)}
              active={!disabledTags.includes(id)}
              clickable
            />
          ))
        }
      </Horizontal>
    );
  }
}

export default props => (
  <TagContext.Consumer>
    {({ tags }) => <TagHolder tags={tags.map(({ tag, id }) => ({ tag, id }))} {...props} />}
  </TagContext.Consumer>
);
