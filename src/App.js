import React from 'react';
import { RecoilRoot } from 'recoil';
import Button from './common/Button';

//테스트할 컴포넌트는 임포트해서 사용합니다.
const App = () => {
  const onClick = () => {
    console.log('button1');
  };
  return (
    <RecoilRoot>
      <Button color="white" bgcol="black" onClick={onClick}>
        첫번째 버튼입니다.
      </Button>
      <Button color="yellow">두번째 버튼입니다.</Button>
      <Button color="blue">세번째 버튼입니다.</Button>
    </RecoilRoot>
  );
};

export default App;
