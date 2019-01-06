import React, { Component } from 'react';
// import styled from 'styled-components';

import EditLayout from './EditLayout';
import SignOut from '../../components/SignOut';
import Tag from '../../components/Tag/Tag';

export default class Edit extends Component {
  render() {
    return (
      <EditLayout>
        <div style={{ gridArea: 'status' }}>
          <SignOut />
        </div>
        <div style={{ gridArea: 'tags' }}>
          <Tag />
        </div>
      </EditLayout>
    );
  }
}
