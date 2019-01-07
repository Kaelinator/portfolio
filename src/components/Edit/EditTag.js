import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Tag from '../Tag/Tag';
import ModalManager from '../ModalManager';
import TagForm from '../Tag/TagForm';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: tags;
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 2px;
  font-family: arial;
  border-style: solid;
  border-width: 2px;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export default class EditTag extends Component {
  static propTypes = {
    tags: PropTypes.array,
  }

  static defaultProps = {
    tags: [],
  }

  state = {
    modalVisible: false,
    modal: <div />,
  }

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.submitTag = this.submitTag.bind(this);
    this.editTag = this.editTag.bind(this);
  }


  submitTag({ id, ...tag }) {
    if (tag.cancel) return this.toggleModal();

    const tags = firebase.firestore().collection('tags');

    if (!id) {
      return tags.add(tag)
        .then(() => this.toggleModal())
        .catch(err => console.log('Error creating tag', err));
    }

    const tagRef = tags.doc(id);

    if (tag.delete) {
      return tagRef.delete()
        .then(() => this.toggleModal())
        .catch(err => console.log('Error deleting tag', err));
    }

    return tagRef.set(tag)
      .then(() => this.toggleModal())
      .catch(err => console.log('Error updating tag', err));
  }

  editTag(tag) {
    this.setState({
      modal: <TagForm {...tag} onSubmit={this.submitTag} />,
      modalVisible: true,
    });
  }

  toggleModal() {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  }

  render() {
    const { tags } = this.props;
    const { modalVisible, modal } = this.state;
    return (
      <ModalManager visible={modalVisible} modal={modal}>
        <Wrapper>
          {
            tags.map(tag => (
              <Tag clickable key={tag.id} id={tag.id} onClick={() => this.editTag(tag)} />
            ))
          }
          <Button type="button" onClick={this.editTag}>New Tag</Button>
        </Wrapper>
      </ModalManager>
    );
  }
}
