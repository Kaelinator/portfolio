import React from 'react';
import PropTypes from 'prop-types';

const MagnifyingGlass = ({ color, thickness }) => (
  <svg viewBox="0 0 50 50">
    <ellipse
      cx={25}
      cy={25}
      rx={10}
      ry={10}
      stroke={color}
      strokeWidth={thickness * 3 / 4}
      fill="none"
    />
    <line x1={17} y1={33} x2={10} y2={40} stroke={color} strokeWidth={thickness} />
  </svg>
);

MagnifyingGlass.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
};

MagnifyingGlass.defaultProps = {
  color: 'black',
  thickness: 4,
};

export default MagnifyingGlass;
