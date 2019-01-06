import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/firestore';

const getDataFrom = tags => tag => tags.find(e => e.tag === tag) || {};
const getColorsFrom = tags => articleTags => tags
  .filter(({ tag }) => articleTags.includes(tag))
  .reduce((arr, { color, accent }) => [color, ...arr, accent], []);

const initializeState = tags => ({
  tags,
  dataOf: getDataFrom(tags),
  colorsOf: getColorsFrom(tags),
});

export const TagContext = React.createContext(initializeState([]));

export class TagProvider extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  state = initializeState([])

  componentDidMount() {
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });

    const tagRefUnsub = firestore
      .collection('tags')
      .onSnapshot((snap) => {
        const tags = snap.docs.map(doc => doc.data());

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
