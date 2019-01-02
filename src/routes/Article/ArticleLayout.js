import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Desktop, Tablet, Mobile } from '../../components/DeviceQueries';

const WrapperLarge = styled.div`
  display: grid;
  grid-template-areas:
    'left titl right'
    'left tags right'
    'left subt right'
    'left text right'
    'left foot right';
  grid-template-columns: 3fr 5fr 3fr;
`;

const WrapperMedium = styled.div`
  display: grid;
  grid-template-areas:
    'titl titl titl'
    'tags tags tags'
    'subt subt subt'
    'left text right'
    'left foot right';
  grid-template-columns: 3fr 10fr 3fr;
`;

const FillWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'titl'
    'tags'
    'subt'
    'text'
    'foot';
`;

const ArticleLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Desktop>
        <WrapperLarge>{children}</WrapperLarge>
      </Desktop>
      <Tablet>
        <WrapperMedium>{children}</WrapperMedium>
      </Tablet>
      <Mobile>
        <FillWrapper>{children}</FillWrapper>
      </Mobile>
    </>
  );
};

ArticleLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ArticleLayout;
