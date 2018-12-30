import React, { Component } from 'react';

import styled from 'styled-components';

import { NotMobile } from '../layouts/DeviceQueries';
import MagnifyingGlass from '../svg/MagnifyingGlass';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  border-radius: 3px;
  border: solid gray 1px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const Bar = styled.input`
  border: none;
  vertical-align: text-bottom;
  display: inline-block;
  margin-right: 5px;
  padding: 5px;
  font-size: 1.5em;
`;

const SearchIcon = styled.span`
  vertical-align: text-bottom;
  display: inline-block;
`;

export default class Search extends Component {
  render() {
    return (
      <Wrapper>
        <SearchIcon><MagnifyingGlass /></SearchIcon>
        <Bar type="text" placeholder="Search" />
      </Wrapper>
    );
  }
}
