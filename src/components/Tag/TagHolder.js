import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Horizontal = styled.div`
display: flex;
justify-content: space-between;
margin-left: 0;
margin-right: 0;
overflow-x: auto;
scrollbar-width: none;

&::-webkit-scrollbar {
  display: none;
}
`;


export default class TagHolder extends Component {
static propTypes = {
  children: PropTypes.array,
};

static defaultProps = {
  children: [],
};

// constructor(props) {
//   super(props);

// }

render() {
  const { children } = this.props;
  return (
    <Horizontal>
      {children}
    </Horizontal>
  );
}
}
