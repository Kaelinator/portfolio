import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';

import shuffle from 'array-shuffle';
import Banner from '../../components/Banner/Banner';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import HomeLayout from './HomeLayout';
import Search from '../../components/Search';
import { Tag, TagHolder } from '../../components/Tag';

const Item = posed.div();

const Wrapper = styled.div`
  color: #1F1F20;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

const colorMap = {
  coding: '#22DDEE',
  creating: '#55EE22',
  running: '#DEEE22',
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    const articles = Array(50)
      .fill(0)
      .map((_, i) => ({
        id: Math.random().toString(),
        title: 'Necessitatibuses voluptatem accusamus provident. Sit temporibus ea sint. Beatae tempora placeat laboriosam et alias magni. Non esse omnis velit sunt labore.',
        subtitle: Array(5).fill(`This is article Necessitatibuses ${i}.`).join(''),
        tags: shuffle(['coding', 'creating', 'running']).slice(1),
      }))
      .map(a => ({
        ...a,
        colors: a.tags.map(tag => colorMap[tag]),
      }));

    this.state = {
      articles,
      visibleArticles: articles,
      searching: false,
    };

    this.search = this.search.bind(this);
    this.SearchBar = prop => <Search type="text" onSearch={this.search} {...prop} />;
    this.TagHolder = prop => (
      <TagHolder {...prop}>
        <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
        <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
        <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
      </TagHolder>
    );
  }

  search(text) {
    const { articles } = this.state;
    const visibleArticles = articles.filter(({ title }) => title.includes(text));
    this.setState({
      visibleArticles,
      searching: !!(text.length),
    });
  }

  render() {
    const { visibleArticles, searching } = this.state;
    return (
      <Wrapper>
        <HomeLayout>
          <PoseGroup>
            <Banner key="banner" Search={this.SearchBar} TagHolder={this.TagHolder} />
            {
              searching
                ? (
                  <Item key="results" style={{ gridArea: 'rslt' }}>
                    <Results>
                      {
                        visibleArticles.length === 0
                          ? <h2>No articles found</h2>
                          : visibleArticles.map(article => (
                            <Item key={article.id}>
                              <ArticleCard {...article} />
                            </Item>
                          ))
                  }
                    </Results>
                  </Item>
                )
                : visibleArticles.map(article => (
                  <Item key={article.id}>
                    <ArticleCard {...article} />
                  </Item>
                ))
            }
          </PoseGroup>
        </HomeLayout>
      </Wrapper>
    );
  }
}
