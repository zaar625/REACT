import React from 'react';
import find from 'lodash/find';
// import find from 'lodash/find'
//! 다양한 상품 필터 기능을 만들어 봅니다.

//!

const productInfo = {
  size: ['90', '95', '100'],
  color: ['black', 'white', 'red', 'blue'],
  classes: [
    'MARCE',
    'BELL',
    'NUOVO',
    'FLOUI',
    'LUCIO',
    'BRUNI',
    'TINDY',
    'CASUAL',
  ],
};

const obj = {
  lee: {
    name: 'user1',
    age: 12,
    isCorrect: true,
  },
  sang: {
    name: 'user2',
    age: 13,
    isCorrect: false,
  },
};
const a = find(obj, { isCorrect: false });
console.log(a);

const Filter = () => {
  return <div></div>;
};

export default Filter;
