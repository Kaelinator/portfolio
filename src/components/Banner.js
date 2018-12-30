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

const Search = styled.input`
  vertical-align: text-bottom;
  height: 50px;
  display: inline-block;
  border-radius: 0 5px 5px 0;
  border: solid gray 1px;
  border-left: none;
  margin: 0;
  padding: 0;
  width: 400px;
  font-size: inherit;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const SearchIcon = styled.span`
  vertical-align: text-bottom;
  height: 50px;
  display: inline-block;
  border-radius: 5px 0 0 5px;
  border: solid gray 1px;
  margin: 0;
  padding: 0 10px 0 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const SearchBar = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 2em;
  font-family: arial;
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
        <SearchBar>
          {/* <SearchIcon>&rarr;</SearchIcon> */}
          <SearchIcon>&#8674;</SearchIcon>
          <Search type="text" id="search" aria-label="Search" />
        </SearchBar>
      </Container>
    );
  }
}
