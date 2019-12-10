import React, { Component } from 'react';

import styled from 'styled-components';

import Banner from '../../components/Banner/Banner';
import HomeLayout from './HomeLayout';
import Search from '../../components/Search';
import TagHolder from '../../components/Tag/TagHolder';
import { ArticleContext } from '../../components/Article/ArticleProvider';
import Results from './ArticleDisplay';

const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  grid-row: -2 / -1;
  padding: 20px;
`;

const Social = styled.a`
  font: 1.25em arial;
  margin-left: 10px;
  margin-right: 10px;
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
      <HomeLayout footer={(
        <Footer>
          <Social href="mailto:kirkkael@gmail.com" target="_blank" rel="noopener">Email</Social>
          <Social href="https://github.com/Kaelinator" target="_blank" rel="noopener">GitHub</Social>
          <Social href="https://www.linkedin.com/in/kaelkirk/" target="_blank" rel="noopener">LinkedIn</Social>
          <Social href="https://medium.com/@kaelinator" target="_blank" rel="noopener">Medium</Social>
          <Social href="https://twitter.com/Kaelinator17" target="_blank" rel="noopener">Twitter</Social>
          <Social href="https://www.youtube.com/kaelinatorpvp" target="_blank" rel="noopener">YouTube</Social>
        </Footer>
      )}
      >
        <Banner key="banner" Search={this.SearchBar} TagHolder={this.TagHolder} />
        <ArticleContext.Consumer key="articles">
          { articles => <Results articles={articles} search={search} tags={tags} /> }
        </ArticleContext.Consumer>
      </HomeLayout>
    );
  }
}
