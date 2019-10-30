import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Edit from '../routes/Edit/Edit';
import TagForm from '../components/Tag/TagForm';
import EditTag from '../components/Edit/EditTag';
import EditArticle from '../components/Edit/EditArticle';
import ArticleForm from '../components/Article/ArticleForm';
import ArticleCard from '../components/Article/ArticleCard';

storiesOf('Edit', module)
  .add('edit layout', () => <Edit />)
  .add('article edit', () => <EditArticle articles={[]} />)
  .add('tag edit', () => <EditTag tags={Array(10).fill('')} />);

storiesOf('TagForm', module)
  .add('tag form', () => <TagForm />);

storiesOf('Article', module)
  .add('article form', () => <ArticleForm />)
  .add('article card', () => (
    <div style={{ width: '200px' }}>
      <ArticleCard
        title="Here's my own clickbait title!"
        subtitle="This is my clickbait subtitle to go along with my clickbait title. Here it is in all of its glory. It may have ran out of room, but that's alright. The points of this is to see what happens."
        tags={Array(11).fill(null).map(() => `${Math.random()}`)}
      />
    </div>
  ));
