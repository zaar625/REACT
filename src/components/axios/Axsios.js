import React, { useState } from 'react';
import AxiosData from './AxiosData';

const Axsios = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input type="text" value={query} onChange={onChange}></input>
      <AxiosData query={query} />
    </div>
  );
};

export default Axsios;
