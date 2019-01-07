import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  grid-area: article;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: arial;
  margin: 0;
`;

export default class FocusArticle extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    id: null,
    title: '',
  };

  render() {
    const { title } = this.props;
    return (
      <>
        <Header>
          <Title>{title}</Title>
        </Header>
      </>
    );
  }
}
