import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tag, TagHolder } from './Tag';
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
  }

  state = {
    focused: null,
  }

  constructor(props) {
    super(props);

    this.setFocus = this.setFocus.bind(this);
  }

  setFocus(element) {
    this.setState({ focused: element });
  }

  render() {
    const { Search } = this.props;
    const { focused } = this.state;
    return (
      <BannerLayout>
        <Desktop>
          <Name>Kael Kirk</Name>
        </Desktop>
        <Tablet>
          <NameSmall>Kael Kirk</NameSmall>
        </Tablet>
        <Mobile>
          { !focused && <NameSmall>Kael</NameSmall> }
        </Mobile>
        {
                (!focused || focused === 'TAG')
                  ? (
                    <TagHolder onExpand={() => this.setFocus('TAG')} onContract={() => this.setFocus(null)}>
                      <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
                      <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
                      <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
                      <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
                      <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
                      <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
                      <Tag color="#22DDEE" accent="#00BBCC">Coding</Tag>
                      <Tag color="#55EE22" accent="#33CC00">Creating</Tag>
                      <Tag color="#DEEE22" accent="#BCCC00">Running</Tag>
                    </TagHolder>
                  )
                  : null
              }
        <Search />
      </BannerLayout>
    );
  }
}
