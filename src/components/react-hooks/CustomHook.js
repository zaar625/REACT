import React, { useState } from 'react';

//! customHook practice
//! "컴포넌트를 설계할 때 컴포넌트의 역할이 명확하게 나타나는가." 를 고려합니다.

const useInput = (validator) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const { value } = e.tartget;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const CustomHook = () => {
  const maxLen = (value) => value.length <= 10;
  const { value, onChange } = useInput(maxLen);

  const onClick = () => {
    console.log('click 되었습니다.');
  };

  return (
    <div className="box">
      <input placeholder="Name" value={value} onChange={onChange} />
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export default CustomHook;

//! customHook의 장점.
//! 클래스 컴포넌트보다 적은 양의 코드로 동일한 로직을 구현할 수 있다.
//! 코드 양이 적지만 명료함을 잃지 않는다.
//! 상태관리 로직의 재활용이 가능하다.

//! 규칙
//! 1. 최상위 (at the Top Level)에서만 Hook을 호출해야 한다.
//! 2. 오직 React 함수 내에서 Hook을 호출해야 한다.
//! 3. customHook 생성 시  naming은 use로 시작한다.
//! 4. customHook이 코드의 인과관계를 파악하는데 영향을 끼치지 않아야 한다.
