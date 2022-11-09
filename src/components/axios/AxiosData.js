import React, { useEffect } from 'react';
import axios from 'axios';

// ! 1. props가 변할때마다  useEffect가 실행되게 할수 있습니다.
// ! 2. useEffect 마운트 되기전에 실행할 함수를 지정할 수 있습니다.
// ! 3. cancelToken

const AxiosData = ({ query }) => {
  useEffect(() => {
    let cancel;
    axios({
      method: 'GET',
      url: `https://dummyjson.com/users/search`,
      params: { q: query },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        // console.log(e);
        if (axios.isCancel(e)) return;
      });

    return () => cancel();
    // return () => console.log('pending');
  }, [query]);

  return <div>AxiosSub</div>;
};

export default AxiosData;
