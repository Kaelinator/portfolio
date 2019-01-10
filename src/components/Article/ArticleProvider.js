import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/firestore';

export const ArticleContext = React.createContext([]);

export default class ArticleProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    articleRefUnsub: null,
    articles: [],
  }

  componentDidMount() {
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });

    const articleRefUnsub = firestore
      .collection('articles')
      .onSnapshot((snap) => {
        const articles = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ articles });
      });

    this.setState({ articleRefUnsub });
  }

  componentWillUnmount() {
    const { articleRefUnsub } = this.state;

    articleRefUnsub();
  }

  render() {
    const { children } = this.props;
    const { articles } = this.state;
    return (
      <ArticleContext.Provider value={articles}>
        {children}
      </ArticleContext.Provider>
    );
  }
}
