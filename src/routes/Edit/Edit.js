import React, { Component } from 'react';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import { TagContext } from '../../components/Tag/TagProvider';
import EditTag from '../../components/Edit/EditTag';
import { ArticleContext } from '../../components/Article/ArticleProvider';
import EditArticle from '../../components/Edit/EditArticle';
import FocusArticle from '../../components/Edit/FocusArticle';

export default class Edit extends Component {
  state ={
    focus: null,
  }

  constructor(props) {
    super(props);
    this.setFocusArticle = this.setFocusArticle.bind(this);
  }

  setFocusArticle(article) {
    this.setState({ focus: article });
  }

  render() {
    const { focus } = this.state;
    return (
      <EditLayout>
        <SignOut />

        <TagContext.Consumer>
          { ({ tags }) => <EditTag tags={tags} /> }
        </TagContext.Consumer>

        <ArticleContext.Consumer>
          { articles => <EditArticle articles={articles} onArticleFocus={this.setFocusArticle} /> }
        </ArticleContext.Consumer>

        <FocusArticle {...focus} />
      </EditLayout>
    );
  }
}
