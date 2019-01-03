import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BannerLayout from './BannerLayout';
import {
  Mobile, Desktop, Tablet, ResponsiveContext,
} from '../DeviceQueries';


const Name = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 7em;
  grid-area: name;
`;

const NameMedium = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 3em;
  margin: 0;
  padding: 0;
  grid-area: name;
`;

const NameSmall = styled.h1`
  font-family: arial;
  text-align: center;
  font-size: 3em;
  margin: 0;
  padding: 0;
  grid-area: name;
  justify-self: end;
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
          <NameMedium>Kael Kirk</NameMedium>
        </Tablet>
        <Mobile>
          <NameSmall>Kael</NameSmall>
        </Mobile>
        <div style={{ gridArea: 'tags' }}>
          <TagHolder />
        </div>
        <div style={{ gridArea: 'srch', width: '100%' }}>
          <ResponsiveContext.Consumer>
            {
              ({ isMobile }) => <Search contracted={isMobile} />
            }
          </ResponsiveContext.Consumer>
        </div>
      </BannerLayout>
    );
  }
}
