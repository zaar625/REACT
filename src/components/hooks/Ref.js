import React, { useRef } from 'react';

const Ref = () => {
  //useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킵니다.
  const inputEl = useRef(null);

  //로컬변수로 사용할 수 있습니다. 고유값 아이디를 변경할 때 ui에 영향을 끼칠 필요가 없기때문에
  //재렌더링을 할 필요가 없겠죠?
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  console.log('lendering');
  console.log(id.current);
  return (
    <div>
      <input ref={inputEl} />
      <button ref={id} onClick={() => setId(1)}>
        button
      </button>
    </div>
  );
};

export default Ref;

//Ref는 어떤 상황에서 사용해야 할까? -> Dom을 직접 건드려야 할 때 사용한다.
//특정 input에 포커스를 주거나 스크롤 박스를 조작하거나. 등등
