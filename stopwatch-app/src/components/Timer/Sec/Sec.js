import React from 'react';

export const Sec = ({ sec }) => {
  let hours = Math.floor((sec / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((sec / (1000 * 60)) % 60);
  let seconds  = Math.floor((sec / 1000) % 60);

  return (
    <div>
      {hours + ":" + minutes + ":" + seconds}
    </div>
  );
};
