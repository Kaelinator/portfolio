import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

const Name = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 2em;
`;

export default class Banner extends Component {
  render() {
    return (
      <Container>
        <Name>Kael Kirk</Name>
        <p>Heck</p>
        <p>Heck!</p>
      </Container>
    );
  }
}
