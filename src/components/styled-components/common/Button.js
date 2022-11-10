import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const Button = ({ children, ...rest }) => {
  //! 1. children : button 컴포넌트 사이에 있는 값들을 말합니다.
  //! 2. ...rest : props로 내려준 값들입니다.
  // console.log(children, rest);
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
