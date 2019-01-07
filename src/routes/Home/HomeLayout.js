import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import {
  DesktopSmall, DesktopLarge, Tablet, Mobile,
} from '../../components/DeviceQueries';

const GridLarge = styled.div`
  display: grid;
  grid-template-areas: 
    'left left head head head head right right'
    'left left head head head head right right'
    'left left rslt rslt rslt rslt right right';
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    'left head head head right'
    'left head head head right'
    'left rslt rslt rslt right';
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
`;

const GridTablet = styled.div`
  display: grid;
  grid-template-areas: 
    'left head head right'
    'left rslt rslt right';
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
`;

const GridMobile = styled.div`
  display: grid;
  grid-template-areas: 
    'head'
    'rslt';
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
`;

const HomeLayout = ({ children }) => (
  <>
    <DesktopLarge>
      <GridLarge>{children}</GridLarge>
    </DesktopLarge>

    <DesktopSmall>
      <Grid>{children}</Grid>
    </DesktopSmall>

    <Tablet>
      <GridTablet>{children}</GridTablet>
    </Tablet>

    <Mobile>
      <GridMobile>{children}</GridMobile>
    </Mobile>
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.array,
};

HomeLayout.defaultProps = {
  children: [],
};

export default HomeLayout;
