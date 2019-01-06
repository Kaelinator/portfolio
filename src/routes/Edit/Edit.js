import React, { Component } from 'react';
// import styled from 'styled-components';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import Tag from '../../components/Tag/Tag';
import { TagContext } from '../../components/Tag/TagProvider';
import ModalManager from '../../components/ModalManager';
import TagForm from '../../components/Tag/TagForm';

export default class Edit extends Component {
  state = {
    modalVisible: false,
  }

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <ModalManager visible={modalVisible} modal={<TagForm onSubmit={this.toggleModal} />}>
        <EditLayout>
          <div style={{ gridArea: 'status' }}>
            <SignOut />
          </div>
          <div style={{ gridArea: 'tags' }}>
            <TagContext.Consumer>
              {
                ({ tags }) => tags.map(({ tag, id }) => (
                  <Tag key={id} tag={tag} clickable onClick={this.toggleModal} />
                ))
              }
            </TagContext.Consumer>
          </div>
          {}
        </EditLayout>
      </ModalManager>
    );
  }
}
