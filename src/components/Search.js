import React, { Component } from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';
import styled from 'styled-components';

import MagnifyingGlass from '../svg/MagnifyingGlass';

const Layout = posed(styled.div`
  display: flex;
  flex-direction: row;
  border-radius: inherit;
  border: solid gray 1px;
  border-radius: 3px;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  overflow: hidden;
`)({
  expanded: {
    width: '100%',
  },
  contracted: {
    width: 50,
  },
});

const Bar = styled.input`
  border: none;
  vertical-align: text-bottom;
  margin-right: 5px;
  padding: 5px;
  font-size: 1em;
  color: #1F1F20;
  width: 100%;
`;

const SearchIcon = styled.button`
  vertical-align: text-bottom;
  display: inline-block;
  background: white;
  padding: 0;
  margin: 0;
  border-radius: inherit;
  border: none;
  width: 50px;
  flex-shrink: 0;
`;

export default class Search extends Component {
  static propTypes = {
    contracted: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    contracted: true,
  }

  constructor(props) {
    super(props);

    const expanded = !props.contracted;

    this.state = {
      expanded,
      value: '',
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleExpanded() {
    const { onSearch } = this.props;
    const { expanded, value } = this.state;

    if (expanded) onSearch('');
    else onSearch(value);

    this.setState({ expanded: !expanded });
  }

  handleChange(event) {
    const { onSearch } = this.props;

    this.setState({ value: event.target.value });

    onSearch(event.target.value);
  }

  render() {
    const { expanded, value } = this.state;
    return (
      <Layout pose={expanded ? 'expanded' : 'contracted'}>
        <SearchIcon onClick={this.toggleExpanded} aria-label="search">
          <MagnifyingGlass color="#1F1F20" />
        </SearchIcon>
        <Bar type="text" placeholder="Search" aria-label="search bar" onChange={this.handleChange} value={value} />
      </Layout>
    );
  }
}
