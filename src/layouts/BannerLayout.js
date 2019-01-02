import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Mobile, NotMobile } from './DeviceQueries';

const Container = styled.div`
  grid-area: head;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'name'
    'tags'
    'srch';
  grid-template-rows: repeat(3, auto);
  grid-template-columns: minmax(0, 1fr);
  align-items: baseline;
`;

const Ribbon = styled.div`
  grid-area: head;
  grid-row-gap: 5px;
  display: grid;
  grid-template-areas:
    'srch name'
    'tags tags';
  overflow: hidden;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
`;

const BannerLayout = ({ children }) => (
  <>
    <NotMobile>
      <Container>{children}</Container>
    </NotMobile>
    <Mobile>
      <Ribbon>{children}</Ribbon>
    </Mobile>
  </>
);

BannerLayout.propTypes = {
  children: PropTypes.array,
};

BannerLayout.defaultProps = {
  children: [],
};

export default BannerLayout;
