import React, { useState } from 'react';
import styled from 'styled-components';

//! form - select tag를 직접 style를 적용할 수가 없어 다른 tag로 만들어 봅니다. 이때 중요한것은 접근성을 잘 고려해야 합니다.
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'green', label: 'Green' },
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'dark', label: 'Dark' },
];

const Title = styled.div`
  border: solid 1px lightgray;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  border: solid 1px #ffd772;
  border-radius: 10px;
  list-style: none;
  padding: 0;

  & > li {
    list-style: none;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 1px #f5f5f5;
    text-align: center;
    border-radius: 10px;

    &:hover {
      background-color: #ffd772;
      cursor: pointer;
    }
  }
`;
const FormSelect = () => {
  console.log('lendering');
  const [toggle, setToggle] = useState(false);
  const [listValue, setListValue] = useState('선택하시오');

  return (
    <>
      <h1>FormSelect</h1>
      <Title
        role="button"
        onKeyPress={() => setToggle(!toggle)}
        onClick={() => setToggle(!toggle)}
      >
        {listValue}
      </Title>
      <Ul style={toggle ? { display: 'block' } : { display: 'none' }}>
        {options.map((item, index) => (
          <li
            role="option"
            tabIndex={index}
            aria-selected={item.value === listValue ? true : false}
            onKeyPress={() => setListValue(item.value)}
            onClick={() => setListValue(item.value)}
            key={index}
          >
            {item.value}
          </li>
        ))}
      </Ul>
    </>
  );
};

export default FormSelect;
