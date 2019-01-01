import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleLayout from '../layouts/ArticleLayout';

export default class Article extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { match } = this.props;
    return (
      <ArticleLayout>
        <h1>{`Article ${match.params.articleId}`}</h1>
      </ArticleLayout>
    );
  }
}
