import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Mobile, NotMobile } from './DeviceQueries';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'name'
    'tags'
    'sbar';
  grid-gap: 20px;
  grid-template-rows: repeat(3, auto);
`;

const Ribbon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
