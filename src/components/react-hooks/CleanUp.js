import React, { useEffect, useState } from 'react';

//! 마운트 되고나서 할 일
const CleanUp = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('effect');
    console.log(name);

    return () => {
      console.log('unmount'); //업데이트 되기 직전 실행합니다.
      console.log(name);
    };
  }, [name]); // 두 번째 파라미터에 비어있는 배열을 넣으면 언마운트 될 때만 함수를 호출합니다.
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default CleanUp;
