import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/atom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: ${(props) => (props.state ? 'block' : 'none')};
  background-color: lightblue;
`;

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const onClick = () => {
    const resetState = { state: false, content: '' };
    setModal(resetState);
  };
  return (
    <>
      <StyledModal state={modal.state}>
        <button onClick={onClick}>닫기</button>
        <p>{modal.content}</p>
      </StyledModal>
      <button onClick={onClick}>modal Click</button>
    </>
  );
};

export default Modal;
