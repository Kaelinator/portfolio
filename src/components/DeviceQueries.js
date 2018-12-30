import React from 'react';

import Responsive from 'react-responsive';

export const DesktopLarge = props => <Responsive {...props} minWidth={1761} />;
export const Desktop = props => <Responsive {...props} minWidth={992} maxWidth={1760} />;
export const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
