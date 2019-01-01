import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';


const BoxShadow = styled.div`
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const Card = ({ borderRadius, children }) => (
  <BoxShadow style={{ borderRadius }}>{children}</BoxShadow>
);


Card.propTypes = {
  borderRadius: PropTypes.string,
  children: PropTypes.object.isRequired,
};

Card.defaultProps = {
  borderRadius: '0',
};

export default Card;
