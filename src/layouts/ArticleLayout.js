import React from 'react';
import PropTypes from 'prop-types';

const ArticleLayout = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

ArticleLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ArticleLayout;
