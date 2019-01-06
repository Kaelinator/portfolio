import React, { Component } from 'react';
import styled from 'styled-components';

import EditLayout from './EditLayout';

const Status = styled.div`
  grid-area: status;
`;

export default class Edit extends Component {
  render() {
    return (
      <EditLayout>
        <Status>Edit</Status>
      </EditLayout>
    );
  }
}
