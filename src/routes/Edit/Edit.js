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
    focusId: null,
  }

  constructor(props) {
    super(props);
    this.setFocusArticle = this.setFocusArticle.bind(this);
  }

  setFocusArticle({ id }) {
    this.setState({ focusId: id });
  }

  render() {
    const { focusId } = this.state;
    return (
      <EditLayout>
        <SignOut />

        <TagContext.Consumer>
          { ({ tags }) => <EditTag tags={tags} /> }
        </TagContext.Consumer>

        <ArticleContext.Consumer>
          { articles => <EditArticle articles={articles} onArticleFocus={this.setFocusArticle} /> }
        </ArticleContext.Consumer>


        <ArticleContext.Consumer>
          { (articles) => {
            const article = (articles.filter(({ id }) => focusId === id))[0];
            if (!article) return null;
            return <FocusArticle key={focusId} {...article} />;
          }}
        </ArticleContext.Consumer>
      </EditLayout>
    );
  }
}
