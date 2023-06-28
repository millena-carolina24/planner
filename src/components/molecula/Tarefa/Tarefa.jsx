import React from 'react';
import IconStyle from '../../atoms/Icon/Icon.Style';
import TextStyle from '../../atoms/Text/Text.Style';

const Tarefa = ({ iconCheck, iconAtualizar, iconDeletar, text, mode, onClick }) => {
  return (
    <div className="d-flex">
      {iconCheck && (
        <IconStyle variant="link" mode={mode} onClick={onClick}>
          {iconCheck}
        </IconStyle>
      )}

      {text && (
        <TextStyle>{text}</TextStyle>
      )}

      {iconAtualizar && (
        <IconStyle variant="link" mode={mode} onClick={onClick}>
          {iconAtualizar}
        </IconStyle>
      )}

      {iconDeletar && (
        <IconStyle variant="link" mode={mode} onClick={onClick}>
          {iconDeletar}
        </IconStyle>
      )}
    </div>
  );
};

export default Tarefa;
