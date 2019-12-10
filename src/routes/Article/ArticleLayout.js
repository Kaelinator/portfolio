import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
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

const BackButton = styled.div`
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  width: 20vw;
  height: 20vw;
  background-color: white;
  box-shadow: 0px 2px 14px -6px rgba(0,0,0,0.75);
  border-radius: 50%;
  font-family: sans-serif;
  font-size: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class ArticleLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    exitted: false,
    oldScroll: 0,
    scrolledUp: false,
  }

  constructor(props) {
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);
    window.onscroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const { oldScroll } = this.state;
    const newScroll = document.documentElement.scrollTop;

    this.setState(() => ({
      oldScroll: newScroll,
      scrolledUp: oldScroll < newScroll,
    }));
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
    const { exitted, scrolledUp } = this.state;

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
          {!scrolledUp && <Link to="/"><BackButton>Home</BackButton></Link>}
        </Tablet>
        <Mobile>
          <FillWrapper>{children}</FillWrapper>
          {!scrolledUp && <Link to="/"><BackButton>Home</BackButton></Link>}
        </Mobile>
      </>
    );
  }
}
