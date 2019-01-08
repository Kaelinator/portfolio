import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalManager from './ModalManager';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font: 3em arial;
`;

const Subtitle = styled.h2`
  font: 1em arial;
`;

export default class Loading extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  static defaultProps = {
    message: 'Please wait',
  }

  render() {
    const { message } = this.props;
    return (
      <ModalManager
        noShade
        visible
        modal={(
          <Wrapper>
            <Title>Loading</Title>
            <Subtitle>{message}</Subtitle>
          </Wrapper>
        )}
      />
    );
  }
}
