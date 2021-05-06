import React, { Fragment, useEffect, useState } from 'react';
import { fromEvent, Observable } from 'rxjs';

import { Timer } from '../../components/Timer/Timer';
import { Button } from '../../components/UI/Button/Button';

import './home.scss';

export const Home = () => {
  const [ sec, setSec ] = useState(0);
  const [ isStart, setIsStart ] = useState(false);

  useEffect(() => {
    const observable = new Observable(observer => {
      setInterval(() => {
        observer.next(setSec(s => s + 1000))
      }, 1000);
    });

    observable.subscribe();
  }, []);

  const start = () => {
  };

  const stop = () => {
  };

  const wait = () => {
  };

  const reset = () => {
  };

  return (
    <Fragment>
      <Timer sec={sec} />
      <div className="buttons-row">
        {!isStart ? 
          <Button id="startBtn" onClick={start}>Start</Button> : 
          <Button onClick={stop}>Stop</Button>
        }
        <Button onClick={wait}>Wait</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </Fragment>
  );
};
