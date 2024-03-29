import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import 'firebase/firestore';
// import 'firebase/storage';
import { getStorage, ref, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { getFirestore, doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';

import Dropzone from 'react-dropzone';
import AssetItem from '../Asset/AssetItem';
import { Label, File, Form } from '../Form/Form';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

// const Button = styled.button`
//   font-family: arial;
//   font-size: 2em;
//   border-radius: 4px;
//   cursor: pointer;
//   border-style: solid;
//   border-width: 2px;
//   width: 100%;
// `;

export default class EditAssets extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    assets: PropTypes.array,
  }

  static defaultProps = {
    assets: [],
  }

  state = {
    uploading: false,
    uploadQueue: [],
  }

  constructor(props) {
    super(props);

    this.deleteAsset = this.deleteAsset.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    if (acceptedFiles.length < 1) return;

    const { articleId } = this.props;

    const storage = getStorage();

    const db = getFirestore()
    const article = doc(db, 'articles', articleId);

    const { uploadQueue } = this.state;

    const newQueue = [
      ...uploadQueue,
      ...acceptedFiles.map((file) => {
        const storageRef = ref(storage, `${articleId}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.then(async () => {
          console.log('uploaded');
          await updateDoc(article, {
            assets: arrayUnion(file.name),
          });

          this.setState(({ uploadQueue: queue }) => ({
            uploadQueue: queue.filter(({ name }) => name !== file.name),
          }));
        });

        return { name: file.name, uploadTask };
      }),
    ];

    this.setState({
      uploadQueue: newQueue,
    });
  }

  deleteAsset(assetName) {
    const { articleId } = this.props;

    const db = getFirestore()
    const article = doc(db, 'articles', articleId);

    const storage = getStorage();
    const storageRef = ref(storage, `${articleId}/${assetName}`);

    deleteObject(storageRef)
      .then(async () => {
        await updateDoc(article, {
          assets: arrayRemove(assetName),
        })
      })
      .catch(err => console.log('Error deleting', err));
  }

  cancelUpload(fileName) {
    this.setState(({ uploadQueue }) => ({
      uploadQueue: uploadQueue.filter(({ name }) => name !== fileName),
    }));
  }

  render() {
    const { assets, articleId } = this.props;
    const { uploading, uploadQueue } = this.state;
    return (
      <Wrapper>
        {
          [
            ...assets.map(assetName => (
              <AssetItem
                articleId={articleId}
                key={assetName}
                name={assetName}
                onDelete={() => this.deleteAsset(assetName)}
              />
            )),

            ...uploadQueue.map(({ name, uploadTask }) => (
              <AssetItem
                articleId={articleId}
                key={name}
                name={name}
                onDelete={() => this.cancelUpload(name)}
                uploadTask={uploadTask}
                inactive
              />
            )),
          ]
        }
        <Form>
          <Dropzone onDrop={this.onDrop} disabled={uploading}>
            {
              ({ getRootProps, getInputProps, isDragActive }) => (
                <File {...getRootProps()} active={isDragActive}>
                  <Label>{`${isDragActive ? 'Drop' : 'Drag'} files here`}</Label>
                  <input {...getInputProps()} />
                </File>
              )
            }
          </Dropzone>
        </Form>
      </Wrapper>
    );
  }
}
