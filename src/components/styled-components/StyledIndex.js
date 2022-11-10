import React from 'react';
import Button from './common/Button';
import Css from './common/Css';

const StyledIndex = () => {
  const onChange = () => {
    console.log('function 입니다.');
  };
  return (
    <>
      <Button data="data" onChange={onChange}>
        버튼입니다.
      </Button>
      <Css size="large" data log>
        css button
      </Css>
      <Css size="medium">css button</Css>
    </>
  );
};

export default StyledIndex;
