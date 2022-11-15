import React from 'react';
import { RecoilRoot } from 'recoil';
import CustomHook from './components/react-hooks/CustomHook';

//테스트할 컴포넌트는 임포트해서 사용합니다.
const App = () => {
  return (
    <RecoilRoot>
      <CustomHook />
    </RecoilRoot>
  );
};

export default App;
