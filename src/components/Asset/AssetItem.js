import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/storage';

import styled from 'styled-components';
import { Submit } from '../Form/Form';

const Wrapper = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  margin: 5px;
  background-color: ${({ inactive }) => (inactive ? '#efefef' : '#fff')}
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  font: 1em arial;
`;

const Name = styled.h3`
  font: 1em arial;
  text-overflow: ellipsis;
`;

export default class AssetItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inactive: PropTypes.bool,
  }

  static defaultProps = {
    inactive: false,
  }

  state = {
    url: '',
  }

  constructor(props) {
    super(props);

    this.copyUrl = this.copyUrl.bind(this);
  }


  componentDidMount() {
    const { articleId, name } = this.props;

    firebase.storage()
      .ref()
      .child(articleId)
      .child(name)
      .getDownloadURL()
      .then(url => this.setState({ url }))
      .catch(err => console.log('error loading url!', err));
  }

  copyUrl() {
    const { url } = this.state;
    navigator.clipboard.writeText(url);
  }

  render() {
    const { onClick, name, inactive } = this.props;
    return (
      <Wrapper inactive={inactive}>
        <Name>{name}</Name>
        <Submit type="submit" className="info" value="Copy url" onClick={this.copyUrl} />
        <Submit type="submit" className="danger" value="Delete" onClick={onClick} />
      </Wrapper>
    );
  }
}
