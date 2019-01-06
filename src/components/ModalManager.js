import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const Popup = posed(styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 10px;
  display: grid;
  grid-template-areas:
    'title close'
    'modal modal';
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
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

export default class ModalManager extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: false,
  }

  render() {
    const { children, modal, visible } = this.props;

    return (
      <>
        {children}
        <PoseGroup>
          {
          visible && [
            <Shade key="shade" />,
            <Popup key="popup">{modal}</Popup>,
          ]
        }
        </PoseGroup>
      </>
    );
  }
}
