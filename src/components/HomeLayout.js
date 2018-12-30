import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import {
  Desktop, DesktopLarge, Tablet, Mobile,
} from './DeviceQueries';

const GridLarge = styled.div`
  display: grid;
  grid-template-areas: 
    'left left head head head head right right'
    'left left head head head head right right';
  grid-auto-flow: row dense;
  grid-gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    'left head head head head right'
    'left head head head head right';
  grid-auto-flow: row dense;
  grid-gap: 20px;
`;

const HomeLayout = ({ children }) => (
  <>
    <DesktopLarge>
      <GridLarge>
        {children}
      </GridLarge>
    </DesktopLarge>
    <Desktop>
      <Grid>
        {children}
      </Grid>
    </Desktop>
    <Tablet><div style={{ background: 'green' }}>{children}</div></Tablet>
    <Mobile><div style={{ background: 'blue' }}>{children}</div></Mobile>
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.array,
};

HomeLayout.defaultProps = {
  children: [],
};

export default HomeLayout;
