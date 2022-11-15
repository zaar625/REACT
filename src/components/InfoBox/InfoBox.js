import React, { useState } from 'react';
import CheckBox from './data/CheckBox';
import Period from './data/Period';
import styled from 'styled-components';

//! 인풋 value에 따라 상태관리 연습하는 파일입니다.

const InfoBox = () => {
  const date = ['연도', '분기', '월'];
  const commment = ['요청됨', '완료함', '없음'];

  //! 해당 컴포넌트 사용시 props 데이터를 활용하여 유동적이게 변경.
  const [totalData, setTotalData] = useState({
    종류: [],
    기간: {
      년도: '',
      분기: '',
      월: '',
    },
    이름: [],
    코멘트: [],
  });

  const filterItems = (name, ischecked) => {
    if (ischecked) {
      setTotalData({ ...totalData, 종류: [...totalData.종류, name] });
    } else {
      const newFilter = totalData.종류.filter((e) => e !== name);
      setTotalData({ ...totalData, 종류: newFilter });
    }
  };

  return (
    <InputBoxWrapper>
      <StyledResults>
        <p>종류</p>
        {date.map((item, index) => (
          <CheckBox
            title="종류"
            name={item}
            key={index}
            onChange={filterItems}
          />
        ))}
      </StyledResults>
      <StyledResults>
        <Period
          title="기간"
          setTotalData={setTotalData}
          onChange={(i) =>
            setTotalData({ ...totalData, 기간: { ...totalData.기간, ...i } })
          }
        />
      </StyledResults>
      <StyledResults>
        {commment.map((item, index) => (
          <CheckBox
            title="코멘트 작성"
            name={item}
            key={index}
            onChange={(name) =>
              setTotalData({
                ...totalData,
                코멘트: [...totalData.코멘트, name],
              })
            }
          />
        ))}
      </StyledResults>
    </InputBoxWrapper>
  );
};

export default InfoBox;

const StyledResults = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputBoxWrapper = styled.div`
  padding: 1rem;
  background-color: lightyellow;
`;

//점점 욕심이 난다. 실력있는 프론트엔지니어로 성장하고 싶다.
//그렇다면 어떻게 성장해야할까
//배울게 너무 많다
