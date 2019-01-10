import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'github-markdown-css';
import { ArticleContext } from '../../components/Article/ArticleProvider';
import Article from './Article';

const fallbackArticle = {
  title: 'loading',
};

export default class ArticleLoader extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        articleUrl: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
    match: { params: { articleUrl: 'not-found' } },
  }

  render() {
    const { match: { params: { articleUrl } } } = this.props;
    return (
      <ArticleContext.Consumer>
        {
          (articles) => {
            const article = articles.find(({ url }) => articleUrl === url) || fallbackArticle;
            return (
              <Article {...article} />
            );
          }
        }
      </ArticleContext.Consumer>
    );
  }
}
