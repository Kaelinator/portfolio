import React, { Component } from 'react';
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
  state = {
    expanded: false,
    value: '',
  }

  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(({ expanded }) => ({ expanded: expanded || window.innerWidth > 767 }));
  }

  toggleExpanded() {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
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
