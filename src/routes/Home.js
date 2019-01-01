import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';

import shuffle from 'array-shuffle';
import Banner from '../components/Banner';
import Article from '../components/Article';
import HomeLayout from '../layouts/HomeLayout';
import Search from '../components/Search';

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
        id: Math.random(),
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
            <div key="banner" style={{ gridArea: 'head' }}>
              <Banner Search={
                () => (
                  <Search
                    type="text"
                    onSearch={this.search}
                  />
                )}
              />
            </div>
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
                              <Article {...article} />
                            </Item>
                          ))
                  }
                    </Results>
                  </Item>
                )
                : visibleArticles.map(article => (
                  <Item key={article.id}>
                    <Article {...article} />
                  </Item>
                ))
            }
          </PoseGroup>
        </HomeLayout>
      </Wrapper>
    );
  }
}
