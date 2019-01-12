import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Edit from '../routes/Edit/Edit';
import TagForm from '../components/Tag/TagForm';
import EditTag from '../components/Edit/EditTag';
import EditArticle from '../components/Edit/EditArticle';
import ArticleForm from '../components/Article/ArticleForm';

storiesOf('Edit', module)
  .add('edit layout', () => <Edit />)
  .add('article edit', () => <EditArticle articles={[]} />)
  .add('tag edit', () => <EditTag tags={Array(10).fill('')} />);

storiesOf('TagForm', module)
  .add('article form', () => <ArticleForm />)
  .add('tag form', () => <TagForm />);
