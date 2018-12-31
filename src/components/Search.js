import React, { Component } from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';
import styled from 'styled-components';

import MagnifyingGlass from '../svg/MagnifyingGlass';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  border-radius: 3px;
  border: solid gray 1px;
  background: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

const Bar = styled.input`
  border: none;
  vertical-align: text-bottom;
  display: inline-block;
  margin-right: 5px;
  padding: 5px;
  font-size: 1.5em;
  color: #1F1F20;
`;

const SearchIcon = styled.span`
  vertical-align: text-bottom;
  display: inline-block;
  width: 50px;
`;

const ExpandableWrapper = posed.div({
  expanded: { width: 'auto' },
  contracted: { width: 50 },
});

export default class Search extends Component {
  static propTypes = {
    isMobile: PropTypes.bool,
    onExpand: PropTypes.func.isRequired,
    onContract: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isMobile: true,
  }

  constructor(props) {
    super(props);

    const expanded = !props.isMobile;

    this.state = {
      expanded,
      value: '',
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleExpanded() {
    const { isMobile, onExpand, onContract } = this.props;
    const { expanded } = this.state;

    if (!isMobile) return; // no need to toggle

    if (!expanded) onExpand();
    else onContract();


    this.setState(({ expanded: !expanded }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { expanded, value } = this.state;
    return (
      <ExpandableWrapper pose={expanded ? 'expanded' : 'contracted'} style={{ overflow: 'hidden' }}>
        <Layout>
          <SearchIcon onClick={this.toggleExpanded}><MagnifyingGlass color="#1F1F20" /></SearchIcon>
          <Bar type="text" placeholder="Search" onChange={this.handleChange} value={value} />
        </Layout>
      </ExpandableWrapper>
    );
  }
}
