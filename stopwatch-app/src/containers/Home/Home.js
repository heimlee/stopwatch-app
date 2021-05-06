import React, { Fragment, useEffect, useState } from 'react';
import { Observable } from 'rxjs';


import { Timer } from '../../components/Timer/Timer';

export const Home = () => {
  const [ sec, setSec ] = useState(0);

  useEffect(() => {
    const observable = new Observable();
  }, []);

  return (
    <Fragment>
      <Timer sec={sec} />
      <div>
        <div>Start/Stop</div>
        <div>Wait</div>
        <div>Reset</div>
      </div>
    </Fragment>
  );
};
