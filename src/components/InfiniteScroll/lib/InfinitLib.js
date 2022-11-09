import React from 'react';
import { useInView } from 'react-intersection-observer';
import View from './View';

const InfinitLib = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <div style={{ backgroundColor: 'lightcyan', height: '100vh' }}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
      <div ref={ref} style={{ backgroundColor: 'lightblue', height: '100vh' }}>
        second
        {console.log(`${inView}`)}
      </div>
      <View />
    </>
  );
};

export default InfinitLib;
