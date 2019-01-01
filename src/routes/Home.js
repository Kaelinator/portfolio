import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';

import shuffle from 'array-shuffle';
import Banner from '../components/Banner';
import Article from '../components/Article';
import HomeLayout from '../layouts/HomeLayout';

const Item = posed.div();

const Wrapper = styled.div`
  background: #F9F9FA;
  color: #1F1F20;
`;

const colorMap = {
  coding: '#22DDEE',
  creating: '#55EE22',
  running: '#DEEE22',
};

export default class Home extends Component {
  state = {
    articles: Array(50)
      .fill(0)
      .map((_, i) => ({
        id: i,
        title: 'Necessitatibuses voluptatem accusamus provident. Sit temporibus ea sint. Beatae tempora placeat laboriosam et alias magni. Non esse omnis velit sunt labore.',
        subtitle: Array(5).fill(`This is article Necessitatibuses ${i}.`).join(''),
        tags: shuffle(['coding', 'creating', 'running']).slice(1),
      }))
      .map(a => ({
        ...a,
        colors: a.tags.map(tag => colorMap[tag]),
      })),
  }

  // constructor(props) {
  //   super(props);

  //   setInterval(() => {
  //     this.setState(prevState => ({
  //       articles: prevState.articles.reverse(),
  //     }));
  //   }, 1000);
  // }

  render() {
    const { articles } = this.state;
    return (
      <Wrapper>
        <HomeLayout>
          <PoseGroup>
            <div key="banner" style={{ gridArea: 'head' }}><Banner key="banner" style={{ gridArea: 'head' }} /></div>
            {
              articles.map(article => (
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
