import React, { Component } from 'react';
import styled from 'styled-components';

import { Tag, TagHolder } from './Tag';
import Search from './Search';
import BannerLayout from '../layouts/BannerLayout';
import { Tablet, Desktop } from '../layouts/DeviceQueries';


const Name = styled.h1`
  font-family: arial;
  text-align: center;
  color: #1F1F20;
  font-size: 7em;
`;

const NameSmall = styled.h1`
  font-family: arial;
  text-align: center;
  color: #1F1F20;
  font-size: 3em;
  margin: 0;
  padding: 0;
`;

export default class Banner extends Component {
  render() {
    return (
      <BannerLayout>
        <Desktop>
          <Name>Kael Kirk</Name>
        </Desktop>
        <Tablet>
          <NameSmall>Kael Kirk</NameSmall>
        </Tablet>
        <TagHolder>
          <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
          <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
          <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
        </TagHolder>
        <Search type="text" />
      </BannerLayout>
    );
  }
}
