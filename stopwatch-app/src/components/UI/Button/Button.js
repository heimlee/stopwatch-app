import React from 'react';

import './button.scss';

export const Button = ({ id, children, type, onClick, onDoubleClick }) => {
  return (
    <button className="button" id={id} type={type} onClick={onClick} onDoubleClick={onDoubleClick}>
      {children}
    </button>
  );
};
