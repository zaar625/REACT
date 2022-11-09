import React from 'react';
import { InView } from 'react-intersection-observer';

const View = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div
          style={{ backgroundColor: 'lightpink', height: '100vh' }}
          ref={ref}
        >
          View Component{console.log(`View compoenent ${inView}`)}
        </div>
      )}
    </InView>
  );
};

export default View;
