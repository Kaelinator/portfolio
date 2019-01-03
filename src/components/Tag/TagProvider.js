import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getDataFrom = tags => tag => tags.find(e => e.tag === tag) || {};
const getColorsFrom = tags => (
  articleTags => tags
    .filter(({ tag }) => articleTags.includes(tag))
    .reduce((arr, { color, accent }) => [color, ...arr, accent], [])
);

const defaultState = {
  tags: [],
  dataOf: getDataFrom([]),
  colorsOf: getColorsFrom([]),
};

export const TagContext = React.createContext(defaultState);

export class TagProvider extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  state = defaultState

  componentDidMount() {
    /* TODO: fetch tags */
    const tags = [
      { tag: 'Coding', color: '#22DDEE', accent: '#0eafbe' },
      { tag: 'Creating', color: '#55EE22', accent: '#3abe0e' },
      { tag: 'Running', color: '#DEEE22', accent: '#c5d510' },
    ];
    const dataOf = getDataFrom(tags);
    const colorsOf = getColorsFrom(tags);
    this.setState({ tags, dataOf, colorsOf });
  }

  render() {
    const { children } = this.props;
    return (
      <TagContext.Provider value={{ ...this.state }}>
        {children}
      </TagContext.Provider>
    );
  }
}
