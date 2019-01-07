import React, { Component } from 'react';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import { TagContext } from '../../components/Tag/TagProvider';
import EditTag from '../../components/Edit/EditTag';

export default class Edit extends Component {
  render() {
    return (
      <EditLayout>
        <div style={{ gridArea: 'status' }}>
          <SignOut />
        </div>

        <TagContext.Consumer>
          { ({ tags }) => <EditTag tags={tags} /> }
        </TagContext.Consumer>
      </EditLayout>
    );
  }
}
