import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';

import ArticleItem from '../Article/ArticleItem';
import ModalManager from '../ModalManager';
import ArticleForm from '../Article/ArticleForm';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  grid-area: articles;
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

export default class EditArticle extends Component {
  static propTypes = {
    onArticleFocus: PropTypes.func.isRequired,
    articles: PropTypes.array,
  }

  static defaultProps = {
    articles: [],
  }

  state = {
    modalVisible: false,
    modal: <div />,
  }

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.submitArticle = this.submitArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
  }

  submitArticle({ id, ...article }) {
    if (article.cancel) return this.toggleModal();

    const articles = firebase.firestore().collection('articles');

    if (!id) {
      return articles.add(article)
        .then(() => this.toggleModal())
        .catch(err => console.log('Error creating article', err));
    }

    const articleRef = articles.doc(id);

    if (article.delete) {
      return articleRef.delete()
        .then(() => this.toggleModal())
        .catch(err => console.log('Error deleting article', err));
    }

    return articleRef.set(article)
      .then(() => this.toggleModal())
      .catch(err => console.log('Error updating article', err));
  }

  editArticle(article) {
    this.setState({
      modal: <ArticleForm {...article} onSubmit={this.submitArticle} />,
      modalVisible: true,
    });
  }

  toggleModal() {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  }

  render() {
    const { articles, onArticleFocus } = this.props;
    const { modal, modalVisible } = this.state;
    return (
      <ModalManager visible={modalVisible} modal={modal}>
        <Wrapper>
          {articles.map(article => (
            <ArticleItem
              key={article.id}
              onEdit={() => this.editArticle(article)}
              onWrite={() => onArticleFocus(article)}
              {...article}
            />
          ))}
          <div style={{ margin: '3px' }}>
            <Button type="button" onClick={this.editArticle}>New Article</Button>
          </div>
        </Wrapper>
      </ModalManager>
    );
  }
}
