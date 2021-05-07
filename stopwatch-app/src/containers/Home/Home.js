import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Observable } from 'rxjs';

import { Timer } from '../../components/Timer/Timer';
import { Button } from '../../components/UI/Button/Button';

import './home.scss';

export const Home = () => {
  const [ sec, setSec ] = useState(0);
  const [ isStarted, setIsStarted ] = useState(false);
  const [ isPaused, setIsPaused ] = useState(false);
  const [ isWaited, setIsWaited ] = useState(false);
  const [ isReset, setIsReset ] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observable = new Observable(observer => {
      if (isStarted && isPaused) {
        countRef.current = setInterval(() => {
          observer.next(setSec((s) => s + 1000));
        }, 1000);  
      }
    });
  
    observable.subscribe({
      next: console.log
    });
  }, [isStarted, isPaused]);

  useEffect(() => {
    const observable = new Observable(observer => {
      if (!isStarted && isPaused) {
        clearInterval(countRef.current);
        observer.next(setSec(0));
      }
    });

    observable.subscribe({
      next: console.log
    });
  }, [isStarted, isPaused]);

  useEffect(() => {
    const observable = new Observable(observer => {
      if (isReset && !isStarted && !isPaused) {
        clearInterval(countRef.current);
        observer.next(setSec(0));
      } 
    });

    observable.subscribe({
      next: console.log
    });
  }, [isReset, isStarted, isPaused]);

  const start = () => {
    setIsStarted(true);
    setIsPaused(true);
  };

  const stop = () => {
    setIsStarted(false);
    setIsPaused(true);
  };

  const wait = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsWaited(true);
    clearInterval(countRef.current);
  };

  const reset = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsReset(true);
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
