import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import { Desktop, Tablet, Mobile } from '../components/DeviceQueries';
import Banner from '../components/Banner';

const Item = posed.li();

const List = styled.ul`
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;

const Article = styled.div`
  display: block;
  border-radius: 4px;
  background: red;
  width: 200px;
  height: 200px;
  margin: 10px;
`;

export default class Home extends Component {
  state = {
    articles: Array(50)
      .fill(0)
      .map((_, i) => ({
        id: i,
        body: () => ((i === 2) ? <Banner /> : <Article />),
      })),
  }

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { articles } = this.state;
    return (
      <>
        <Desktop>
          <List>
            <PoseGroup>
              {articles.map(({ id, body }) => <Item key={id}>{body()}</Item>)}
            </PoseGroup>
          </List>
        </Desktop>
        <Tablet><div style={{ background: 'green' }}>You are on a Tablet</div></Tablet>
        <Mobile><div style={{ background: 'blue' }}>You are on a Mobile</div></Mobile>
      </>
    );
  }
}
