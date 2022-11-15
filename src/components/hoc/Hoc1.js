import React from 'react';
import WithIndex from './WithIndex';

const Hoc1 = () => {
  return <div>hoc1입니다.</div>;
};

export default WithIndex(Hoc1);
