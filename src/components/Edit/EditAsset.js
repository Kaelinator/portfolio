import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AssetForm from '../Article/AssetForm';
import ModalManager from '../ModalManager';


const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

const Button = styled.button`
  font-family: arial;
  font-size: 2em;
  border-radius: 4px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  width: 100%;
`;

const Asset = styled.li`
  list-style: none;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  margin: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
`;

export default class EditAsset extends Component {
  static propTypes = {
    assets: PropTypes.array,
  }

  static defaultProps = {
    assets: [],
  }

  state = {
    modalVisible: false,
    modal: <div />,
  }

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.submitAsset = this.submitAsset.bind(this);
    this.editAsset = this.editAsset.bind(this);
  }

  submitAsset(asset) {
    this.toggleModal();
  }

  editAsset(asset) {
    this.setState({
      modal: <AssetForm {...asset} onSubmit={this.submitAsset} />,
      modalVisible: true,
    });
  }

  toggleModal() {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  }

  render() {
    const { assets } = this.props;
    const { modalVisible, modal } = this.state;
    return (
      <ModalManager visible={modalVisible} modal={modal}>
        <Wrapper>
          {
            assets.map(asset => (
              <Asset clickable key={asset.id} id={asset.id} onClick={() => this.editAsset(asset)} />
            ))
          }
          <div style={{ margin: '3px' }}>
            <Button type="button" onClick={this.editAsset}>New Asset</Button>
          </div>
        </Wrapper>
      </ModalManager>
    );
  }
}
