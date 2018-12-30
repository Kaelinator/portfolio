import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Mobile, NotMobile } from '../layouts/DeviceQueries';

const Wrapper = styled.span`
  border-radius: 4px;
  padding: 2px;
  font-family: arial;
  border-style: solid;
  border-width: 2px;
  text-align: center;
`;

const Tag = ({ color, accent, children }) => (
  <Wrapper style={{ backgroundColor: color, borderColor: accent }}>
    {children}
  </Wrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  accent: PropTypes.string,
  children: PropTypes.array,
};

Tag.defaultProps = {
  color: '#999',
  accent: '#000',
  children: [],
};

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Vertical = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 100px;
`;

const TagHolder = ({ children }) => (
  <>
    <Horizontal>{children}</Horizontal>
    {/* <NotMobile>
      <Horizontal>{children}</Horizontal>
    </NotMobile>
    <Mobile>
      <Vertical>{children}</Vertical>
    </Mobile> */}
  </>
);

TagHolder.propTypes = {
  children: PropTypes.array,
};

TagHolder.defaultProps = {
  children: [],
};

export { Tag, TagHolder };
