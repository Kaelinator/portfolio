import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BannerLayout from '../layouts/BannerLayout';
import { Tablet, Desktop, Mobile } from '../layouts/DeviceQueries';


const Name = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 7em;
`;

const NameSmall = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 3em;
  margin: 0;
  padding: 0;
`;

export default class Banner extends Component {
  static propTypes = {
    Search: PropTypes.func.isRequired,
    TagHolder: PropTypes.func.isRequired,
  }

  // constructor(props) {
  //   super(props);
  // }


  render() {
    const { Search, TagHolder } = this.props;
    return (
      <BannerLayout>
        <Desktop>
          <Name>Kael Kirk</Name>
        </Desktop>
        <Tablet>
          <NameSmall>Kael Kirk</NameSmall>
        </Tablet>
        <Mobile>
          <NameSmall>Kael</NameSmall>
        </Mobile>
        <TagHolder />
        <Search />
      </BannerLayout>
    );
  }
}
