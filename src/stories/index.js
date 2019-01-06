import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Edit from '../routes/Edit/Edit';

storiesOf('Edit', module)
  .add('edit layout', () => <Edit />);
