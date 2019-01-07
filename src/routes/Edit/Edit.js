import React, { Component } from 'react';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import { TagContext } from '../../components/Tag/TagProvider';
import EditTag from '../../components/Edit/EditTag';
import { ArticleContext } from '../../components/Article/ArticleProvider';
import EditArticle from '../../components/Edit/EditArticle';

export default class Edit extends Component {
  render() {
    return (
      <EditLayout>
        <div style={{ gridArea: 'status' }}>
          <SignOut />
        </div>

        <TagContext.Consumer>
          { ({ tags }) => <EditTag tags={tags} /> }
        </TagContext.Consumer>

        <ArticleContext.Consumer>
          { articles => <EditArticle articles={articles} /> }
        </ArticleContext.Consumer>
      </EditLayout>
    );
  }
}
