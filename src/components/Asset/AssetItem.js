import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import firebase from 'firebase/compat/app';
// import 'firebase/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import styled from 'styled-components';
import { Submit } from '../Form/Form';

const progressGradient = (progress, uploading) => `
  linear-gradient(to right,
    ${uploading ? '#1cd45e' : '#cfcfcf'} ${progress}%,
    #efefef ${progress}%
  )
`;

const Wrapper = styled.li.attrs(({ inactive, progress, uploading }) => ({
  style: ({
    background: (inactive ? progressGradient(progress, uploading) : '#fff'),
  }),
}))`
  list-style: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  padding: 10px 0 10px 0;
  border-radius: 4px;
  margin: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.25);
  font: 1em arial;
`;

const Name = styled.h3`
  font: 1em arial;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default class AssetItem extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inactive: PropTypes.bool,
    uploadTask: PropTypes.object,
  }

  static defaultProps = {
    inactive: false,
    uploadTask: null,
  }


  constructor(props) {
    super(props);

    const { inactive } = this.props;

    this.state = {
      url: '',
      bytes: 0,
      total: 1,
      uploading: inactive,
    };

    this.copyUrl = this.copyUrl.bind(this);
    this.togglePause = this.togglePause.bind(this);
  }


  componentDidMount() {
    const { articleId, name, uploadTask } = this.props;

    if (uploadTask) {
      const unSub = uploadTask.on('state_changed',
        ({ bytesTransferred, totalBytes }) => this.setState({
          bytes: bytesTransferred,
          total: totalBytes,
        }));

      this.setState({ unSub });
    }

    const storage = getStorage();
    // firebase.storage()
    //   .ref()
    getDownloadURL(ref(storage, `${articleId}/${name}`))
      // .child(articleId)
      // .child(name)
      .then(url => this.setState({ url }))
      .catch(err => console.log('error loading url!', err));
  }

  componentWillUnmount() {
    const { uploadTask } = this.props;
    const { unSub } = this.state;
    if (unSub) unSub();
    if (uploadTask) uploadTask.cancel();
  }

  copyUrl() {
    const { url } = this.state;
    navigator.clipboard.writeText(url);
  }

  togglePause() {
    const { uploadTask } = this.props;

    this.setState(({ uploading }) => ({
      uploading: uploading
        ? !uploadTask.pause()
        : uploadTask.resume(),
    }));
  }

  render() {
    const { onDelete, name, inactive } = this.props;
    const { bytes, total, uploading } = this.state;
    return (
      <Wrapper inactive={inactive} uploading={uploading} progress={bytes / total * 100}>
        <Name>{name}</Name>
        {inactive
          ? <Submit type="submit" className="info" value={uploading ? 'Pause' : 'Resume'} onClick={this.togglePause} />
          : <Submit type="submit" className="info" value="Copy url" onClick={this.copyUrl} />
        }
        <Submit type="submit" className="danger" value="Delete" onClick={onDelete} />
      </Wrapper>
    );
  }
}
