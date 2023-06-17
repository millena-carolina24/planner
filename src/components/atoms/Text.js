// Atom: Text.js

import React from 'react';

const Text = ({ children, style, className }) => {
  return <p  style={style} className={className}>{children}</p>;
};

export default Text;
