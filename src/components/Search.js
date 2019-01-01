import React, { Component } from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';
import styled from 'styled-components';

import MagnifyingGlass from '../svg/MagnifyingGlass';
import Card from './Card';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  border-radius: inherit;
  border: solid gray 1px;
  background: white;
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

const SearchIcon = styled.button`
  vertical-align: text-bottom;
  display: inline-block;
  background: white;
  padding: 0;
  margin: 0;
  border-radius: inherit;
  border: none;
`;

const ExpandableWrapper = posed.div({
  expanded: { width: 'auto' },
  contracted: { width: '-moz-min-content' },
});

export default class Search extends Component {
  static propTypes = {
    isMobile: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
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
    const { isMobile } = this.props;
    const { expanded } = this.state;

    if (!isMobile) return; // no need to toggle

    this.setState(({ expanded: !expanded }));
  }

  handleChange(event) {
    const { onSearch } = this.props;

    this.setState({ value: event.target.value });

    onSearch(event.target.value);
  }

  render() {
    const { expanded, value } = this.state;
    return (
      <Card borderRadius="3px">
        <ExpandableWrapper pose={expanded ? 'expanded' : 'contracted'} style={{ overflow: 'hidden', borderRadius: 'inherit' }}>
          <Layout>
            <SearchIcon onClick={this.toggleExpanded}>
              <MagnifyingGlass color="#1F1F20" />
            </SearchIcon>
            {expanded && <Bar type="text" placeholder="Search" onChange={this.handleChange} value={value} />}
          </Layout>
        </ExpandableWrapper>
      </Card>
    );
  }
}
