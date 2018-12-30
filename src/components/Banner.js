import React, { Component } from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

const Name = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 7em;
`;

const TagHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default class Banner extends Component {
  render() {
    return (
      <Container>
        <Name>Kael Kirk</Name>
        <TagHolder>
          <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
          <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
          <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
        </TagHolder>
      </Container>
    );
  }
}
