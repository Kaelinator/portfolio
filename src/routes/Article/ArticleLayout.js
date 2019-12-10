import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import posed from 'react-pose';

import styled from 'styled-components';

import { Desktop, Tablet, Mobile } from '../../components/DeviceQueries';

const Swipable = posed.div({
  draggable: 'x',
  passive: {
    opacity: ['x', v => 1 - Math.abs(1.5 * v) / window.innerWidth],
  },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring' },
  },
});

const WrapperLarge = styled.div`
  display: grid;
  grid-template-areas:
    'left titl right'
    'left tags right'
    'left subt right'
    'left text right'
    'left foot right';
  grid-template-columns: 3fr 5fr 3fr;
  padding-bottom: 100px;
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
  padding: 10px;
  padding-bottom: 100px;
`;

const FillWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'titl'
    'tags'
    'subt'
    'text'
    'foot';
  padding: 10px;
  padding-bottom: 100px;
`;

export default class ArticleLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    exitted: false,
  }

  constructor(props) {
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  handleSwipe({ clientX, layerX }) {
    if (Math.abs(clientX - layerX) > (window.innerWidth / 3)) {
      this.setState(() => ({
        exitted: true,
      }));
    }
  }

  render() {
    const { children } = this.props;
    const { exitted } = this.state;

    if (exitted) return <Redirect to="/" />;

    return (
      <>
        <Desktop>
          <Swipable onDragEnd={this.handleSwipe}>
            <WrapperLarge>{children}</WrapperLarge>
          </Swipable>
        </Desktop>
        <Tablet>
          <WrapperMedium>{children}</WrapperMedium>
        </Tablet>
        <Mobile>
          <FillWrapper>{children}</FillWrapper>
        </Mobile>
      </>
    );
  }
}
