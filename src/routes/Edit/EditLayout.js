import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Desktop, Tablet, Mobile } from '../../components/DeviceQueries';

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

const WrapperMedium = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    'status  status  '
    'tags    articles'
    'article article '
    'body    body    '
    'assets  assets  ';
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto 500px auto;
`;

const WrapperSmall = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    'status'
    'tags'
    'articles'
    'article'
    'body'
    'assets';
  grid-template-rows: auto auto auto auto 500px auto;
`;

const EditLayout = ({ children }) => (
  <>
    <Desktop>
      <WrapperLarge>{children}</WrapperLarge>
    </Desktop>
    <Tablet>
      <WrapperMedium>{children}</WrapperMedium>
    </Tablet>
    <Mobile>
      <WrapperSmall>{children}</WrapperSmall>
    </Mobile>
  </>
);

EditLayout.propTypes = {
  children: PropTypes.node,
};

EditLayout.defaultProps = {
  children: [],
};

export default EditLayout;
