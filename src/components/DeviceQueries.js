import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

export const DesktopLarge = props => <Responsive {...props} minWidth={1761} />;
export const DesktopSmall = props => <Responsive {...props} minWidth={992} maxWidth={1760} />;

export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const Mobile = props => <Responsive {...props} maxWidth={767} />;

export const NotMobile = props => <Responsive {...props} minWidth={768} />;

const DESKTOP_MIN = 992;
const TABLET_MIN = 768;

export const ResponsiveContext = React.createContext({
  /* assume an iPhone X */
  width: 375,
  height: 812,
  isDesktop: false,
  isTablet: false,
  isMobile: true,
});

export class ResponsiveProvider extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    isDesktop: window.innerWidth >= DESKTOP_MIN,
    isTablet: window.innerWidth < DESKTOP_MIN && window.innerWidth >= TABLET_MIN,
    isMobile: window.innerWidth < TABLET_MIN,
  }

  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({
      width,
      height,
      isDesktop: width >= DESKTOP_MIN,
      isTablet: width < DESKTOP_MIN && width >= TABLET_MIN,
      isMobile: width < TABLET_MIN,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ResponsiveContext.Provider value={{ ...this.state }}>
        {children}
      </ResponsiveContext.Provider>
    );
  }
}
