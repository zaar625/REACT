import React from 'react';
import styled from 'styled-components';

// const buttonSize = ['sm','m','l']
const StyledButton = styled.button`
  padding: 3px;
  border: solid 1px;
  border-radius: 10px;
  width: 200px;
  height: 35px;
`;

const Button = ({ children, ...rest }) => {
  console.log({ ...rest });
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
