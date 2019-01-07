import React, { Component } from 'react';

import styled from 'styled-components';

import Banner from '../../components/Banner/Banner';
import HomeLayout from './HomeLayout';
import Search from '../../components/Search';
import TagHolder from '../../components/Tag/TagHolder';
import { ArticleContext } from '../../components/Article/ArticleProvider';
import Results from './ArticleDisplay';

const Wrapper = styled.div`
  color: #1F1F20;
`;

export default class Home extends Component {
  state = {
    search: '',
    tags: [],
  }

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.filter = this.filter.bind(this);

    this.SearchBar = prop => <Search type="text" onSearch={this.search} {...prop} />;
    this.TagHolder = prop => <TagHolder onStatusChange={this.filter} {...prop} />;
  }

  search(search) {
    this.setState({ search });
  }

  filter(tags) {
    this.setState({ tags });
  }

  render() {
    const { search, tags } = this.state;
    return (
      <Wrapper>
        <HomeLayout>
          <Banner key="banner" Search={this.SearchBar} TagHolder={this.TagHolder} />
          <ArticleContext.Consumer key="articles">
            { articles => <Results articles={articles} search={search} tags={tags} /> }
          </ArticleContext.Consumer>
        </HomeLayout>
      </Wrapper>
    );
  }
}
