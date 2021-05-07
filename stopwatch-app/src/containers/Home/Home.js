import React, { Fragment, useRef, useState } from 'react';
// import { Observable } from 'rxjs';

import { Timer } from '../../components/Timer/Timer';
import { Button } from '../../components/UI/Button/Button';

import './home.scss';

export const Home = () => {
  const [ sec, setSec ] = useState(0);
  const [ isStarted, setIsStarted ] = useState(false);
  const [ isPaused, setIsPaused ] = useState(false);
  const countRef = useRef(null);


  const start = () => {
    setIsStarted(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setSec((s) => s + 1000);
    }, 1000);
  };

  const stop = () => {
    clearInterval(countRef.current);
    setIsStarted(false);
    setIsPaused(true);
    setSec(0);
  };

  const wait = () => {
    setIsStarted(false);
    setIsPaused(true);
    clearInterval(countRef.current);
  };

  const reset = () => {
    clearInterval(countRef.current);
    setIsStarted(false);
    setIsPaused(false);
    setSec(0);
  };

  return (
    <Fragment>
      <Timer sec={sec} />
      <div className="buttons-row">
        {!isStarted ? 
          <Button id="startBtn" onClick={start}>Start</Button> : 
          <Button onClick={stop}>Stop</Button>
        }
        <Button onDoubleClick={wait}>Wait</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </Fragment>
  );
};
