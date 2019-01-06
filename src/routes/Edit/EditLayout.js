import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// import { Desktop } from '../../components/DeviceQueries';

const WrapperLarge = styled.div`
  display: grid;
  grid-template-areas:
    'status status   article article'
    'tags   articles info    info   '
    'tags   articles body    assets ';
  grid-template-columns: 1fr 3fr 2fr 2fr;
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
