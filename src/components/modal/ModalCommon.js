import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/atom';

//! atom 상태관리를 활용하여 Modal값 변경하기
const ModalCommon = () => {
  const [text, setText] = useState('');
  const [modal, setModal] = useRecoilState(modalState);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') return;
    const changeModal = { state: true, content: text };
    setModal({ ...modal, ...changeModal });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="텍스트를 입력해주세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default ModalCommon;
