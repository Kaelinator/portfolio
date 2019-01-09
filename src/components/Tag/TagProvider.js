import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/firestore';

const getDataFrom = tags => id => tags.find(e => e.id === id) || {};
const getColorsFrom = tags => articleTags => tags
  .filter(({ id }) => articleTags.includes(id))
  .reduce((arr, { color, accent }) => [color, ...arr, accent], []);

const initializeState = tags => ({
  tags,
  dataOf: getDataFrom(tags),
  colorsOf: getColorsFrom(tags),
});

export const TagContext = React.createContext(initializeState([]));

export class TagProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = initializeState([])

  componentDidMount() {
    const firestore = firebase.firestore();

    const tagRefUnsub = firestore
      .collection('tags')
      .onSnapshot((snap) => {
        const tags = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({
          ...initializeState(tags),
        });
      });

    this.setState({ tagRefUnsub });
  }

  componentWillUnmount() {
    const { tagRefUnsub } = this.state;

    tagRefUnsub();
  }

  render() {
    const { children } = this.props;
    const { tags, dataOf, colorsOf } = this.state;
    return (
      <TagContext.Provider value={{ tags, dataOf, colorsOf }}>
        {children}
      </TagContext.Provider>
    );
  }
}
