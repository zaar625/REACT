import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

//!메모제이션

const Memojation = () => {
  const [data, setData] = useState();

  const fetchUser = useCallback(() => {
    return axios('https://dummyjson.com/products/1').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return <div></div>;
};

export default Memojation;
