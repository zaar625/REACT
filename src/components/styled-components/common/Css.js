import React from 'react';
import styled, { css } from 'styled-components';

//size를 제어
const sizeStyles = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
`;

const StyleButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}
`;

const Css = ({ children, size, ...rest }) => {
  console.log(children, size, rest);
  return (
    <StyleButton size={size} {...rest}>
      {children}
    </StyleButton>
  );
};

export default Css;
