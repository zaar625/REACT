import React, { useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/display-name
const WithIndex = (Component) => (props) => {
  useEffect(() => {
    console.log('마운트되고 할 일 입니다.');
    console.log(props);
  }, []);
  return <Component {...props} />;
};

export default WithIndex;
