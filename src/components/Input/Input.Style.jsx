import React from 'react';
import { Form } from 'react-bootstrap';


const InputStyle = (props) => {
  return (
    <div>
      <Form.Control {...props} />
    </div>
  );
};

export default InputStyle;
