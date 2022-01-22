import React, { Component } from 'react';
import 'firebase/firestore';
import PropTypes from 'prop-types';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default class Resume extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        load: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
    match: { params: { load: null } },
  }

  componentDidMount() {
    let { match: { params: { load } } } = this.props;
    if (!load) load = this.props.load;
    const storage = getStorage();
    const markdownRef = ref(storage, `static/${load}`);

    
    getDownloadURL(markdownRef)
      .then(url => window.location.assign(url));
  }

  render() {
    return <></>;
  }
}
