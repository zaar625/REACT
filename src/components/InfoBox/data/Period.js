/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';

const Period = () => {
  const dateList = ['2020', '2021', '2022'];
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onClick = () => {
    setToggle(!toggle);
  };

  const listClick = (e) => {
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
    setToggle(!toggle);
  };
  return (
    <Form>
      <input placeholder="연도" value={inputValue} readOnly onClick={onClick} />
      {toggle && (
        <StyledUl>
          {dateList.map((e, i) => (
            <li key={i} onClick={listClick}>
              {e}
            </li>
          ))}
        </StyledUl>
      )}
    </Form>
  );
};

export default Period;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  background-color: lightblue;

  & li {
    list-style: none;
    padding-bottom: 10px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      background-color: lightgreen;
    }
  }
`;

const Form = styled.form`
  height: 150px;
`;
