import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const Popup = posed(styled.div`
  position: absolute;
  background: #F9F9FA;
  border-radius: 10px;
  display: grid;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.4);
  transform: translate(50%, 50%);
`)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed(styled.div`
  position: absolute;
  background: rgba(0, 0, 0, ${({ noShade }) => (noShade ? 0 : 0.8)});
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

export default class ModalManager extends Component {
  static propTypes = {
    modal: PropTypes.object.isRequired,
    children: PropTypes.node,
    visible: PropTypes.bool,
    noShade: PropTypes.bool,
  }

  static defaultProps = {
    children: [],
    visible: false,
    noShade: false,
  }

  render() {
    const {
      children, modal, visible, noShade,
    } = this.props;

    return (
      <>
        {children}
        <PoseGroup>
          { visible && [
            <Shade key="shade" noShade={noShade}><Popup>{modal}</Popup></Shade>,
          ]}
        </PoseGroup>
      </>
    );
  }
}
