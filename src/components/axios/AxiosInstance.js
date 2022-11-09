import React, { useEffect } from 'react';
import axios from 'axios';
import QueryString from 'qs';

//! 1. aixos instance 와 intercepter에 대해 알아봅니다.
//! 2. 자주 사용하는 config(기본값)을 통해 axios를 호출할 수 있습니다.

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  //! 파라미터를 변환해주는 것 같습니다. 자세한 사용법은 깃헙을 참조하시기 바랍니다.
  //   paramsSerializer: function (params) {
  //     return QueryString.stringify(params, { arrayFormat: 'brackets' });
  //   },
});

const AxiosInstance = () => {
  //! --1.get() 메서드에 인자값을 주지 않을 경우 baseURL로 요청이 가고,
  //! get('url',{params})처럼 인자를 포함하여 요청을 보낼경우 baseURL/url/params로 요청이 값니다.
  //! params는 객체로 보내야 합니다.

  useEffect(() => {
    const params = {
      limit: 5,
      skip: 10,
    };
    //!  //limit=5&skip=10 파라미터로 보내는 로직입니다.
    axiosClient.get('/users', { params }).then((res) => {
      console.log(res);
    });
  }, []);

  //! --2.요청 전에 실행합니다. 아래 코드는 요청하기 전 주소값을 변경한 로직입니다.
  //   axiosClient.interceptors.request.use(async (config) => {
  //     console.log('befor instercepter');
  //     config.baseURL = 'https://dummyjson.com/';
  //     return config;
  //   });
  //! --3. 아래코드는 응답 받기 전 실행합니다.
  //   axiosClient.interceptors.response.use(
  //     (response) => {
  //       console.log('after instercepter', response.data);

  //       if (response && response.data) {
  //         return response.data;
  //       }

  //       return response;
  //     },
  //     (error) => {
  //       throw error;
  //     },
  //   );
  return <div>AxiosInstance</div>;
};

export default AxiosInstance;
