//! 자바스크립트로 고차함수에 대해 알아봅니다.

//! hoc1 함수는 hoc2 함수를 반환하는 고차함수입니다.
function hoc1(a) {
  console.log(`hoc1, ${a}`);

  return function hoc2(b) {
    console.log(`hoc2, ${b}`);
  };
}

hoc1('첫번째 함수입니다.')('두번째 함수입니다.');
