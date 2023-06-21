// Atom: Text.js

import React from 'react';
import { StyledText } from './style';

const TextStyle = ({ children, mode }) => {
  return <StyledText $mode={mode}> {children}</StyledText>;
};

export default TextStyle;
