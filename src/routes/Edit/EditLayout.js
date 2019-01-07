import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// import { Desktop } from '../../components/DeviceQueries';

const WrapperLarge = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'status status   article article'
    'tags   articles body    assets ';
  grid-template-columns: 1fr 3fr 2fr 2fr;
  grid-template-rows: auto 1fr;
`;

const EditLayout = ({ children }) => (
  <>
    {/* <Desktop> */}
    <WrapperLarge>{children}</WrapperLarge>
    {/* </Desktop> */}
  </>
);

EditLayout.propTypes = {
  children: PropTypes.array,
};

EditLayout.defaultProps = {
  children: [],
};

export default EditLayout;
