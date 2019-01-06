import React, { Component } from 'react';
// import styled from 'styled-components';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import Tag from '../../components/Tag/Tag';
import { TagContext } from '../../components/Tag/TagProvider';

export default class Edit extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <EditLayout>
        <div style={{ gridArea: 'status' }}>
          <SignOut />
        </div>
        <div style={{ gridArea: 'tags' }}>
          <TagContext.Consumer>
            {
              ({ tags }) => tags.map(({ tag }) => <Tag key={tag} tag={tag} />)
            }
          </TagContext.Consumer>
        </div>
      </EditLayout>
    );
  }
}
