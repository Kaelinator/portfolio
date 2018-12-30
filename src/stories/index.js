import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Home from '../routes/Home';
import Banner from '../components/Banner';

storiesOf('Home', module)
  .add('desktop layout', () => <Home />);

storiesOf('Banner', module)
  .add('desktop layout', () => <Banner />);
