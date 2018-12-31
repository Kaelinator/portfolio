import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ colors }) => {
  const dy = 40 / colors.length;
  return (
    <svg viewBox="0 0 50 50">
      {
        colors.map(
          (color, i) => (
            <rect
              key={Math.random().toString()}
              x={0}
              y={dy * i + 10}
              width={50}
              height={5}
              rx={3}
              ry={3}
              fill={color}
            />
          ),
        )
      }
    </svg>
  );
};

Stack.propTypes = {
  colors: PropTypes.array,
};

Stack.defaultProps = {
  colors: Array(3).fill('black'),
};

export default Stack;
