import React from 'react';

import './button.scss';

export const Button = ({ id, children, type, onClick }) => {
  return (
    <button className="button" id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
