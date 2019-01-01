import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';

import Stack from '../svg/Stack';

const ExpandableWrapper = posed.div({
  expanded: { width: 'auto', height: 'auto' },
  contracted: { width: 50, height: 50 },
});

const Layout = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
`;

const Horizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const TagIcon = styled.span`
  display: inline-block;
  padding: 2px;
  vertical-align: text-bottom;
`;

class TagHolder extends Component {
  static propTypes = {
    children: PropTypes.array,
    isMobile: PropTypes.bool,
  };

  static defaultProps = {
    children: [],
    isMobile: true,
  };

  constructor(props) {
    super(props);

    const expanded = !props.isMobile;

    this.state = {
      expanded,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    const { children, isMobile } = this.props;
    const { expanded } = this.state;
    return (
      <ExpandableWrapper pose={expanded ? 'expanded' : 'contracted'} style={{ overflow: 'hidden' }}>
        <Layout>
          {isMobile && <TagIcon onClick={this.toggleExpanded}><Stack /></TagIcon>}
          <Horizontal>
            {children}
          </Horizontal>
        </Layout>
      </ExpandableWrapper>
    );
  }
}

const Wrapper = styled.span`
  border-radius: 4px;
  padding: 2px;
  font-family: arial;
  border-style: solid;
  border-width: 2px;
  text-align: center;
`;

const Tag = ({ color, accent, children }) => (
  <Wrapper style={{ backgroundColor: color, borderColor: accent }}>
    {children}
  </Wrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  accent: PropTypes.string,
  children: PropTypes.string,
};

Tag.defaultProps = {
  color: '#999',
  accent: '#000',
  children: '',
};

export { Tag, TagHolder };
