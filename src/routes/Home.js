import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

import styled from 'styled-components';

import Banner from '../components/Banner';
import HomeLayout from '../layouts/HomeLayout';

const Item = posed.div();

const Article = styled.div`
  display: block;
  border-radius: 4px;
  background: red;
  width: 100%;
  height: 200px;
`;

export default class Home extends Component {
  state = {
    articles: Array(50)
      .fill(0)
      .map((_, i) => ({
        id: i,
        body: () => <Article>{i}</Article>,
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
      <HomeLayout>
        <PoseGroup>
          <div key="banner" style={{ gridArea: 'head' }}><Banner /></div>
          {articles.map(({ id, body }) => <Item key={id}>{body()}</Item>)}
        </PoseGroup>
      </HomeLayout>
    );
  }
}
