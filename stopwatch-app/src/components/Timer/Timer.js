import React from 'react';

import { Sec } from './Sec/Sec';

import './Timer.scss';

export const Timer = ({ sec }) => (
  <div className="timer-row">
    <Sec sec={sec} />
  </div>
);
