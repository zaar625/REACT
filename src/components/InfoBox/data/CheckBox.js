import React, { useRef } from 'react';

const CheckBox = (props) => {
  const inputRef = useRef();

  const onChange = (e) => {
    if (props.onChange && inputRef.current) {
      props.onChange(props.name, e.target.checked); //년도 분기 월 / checkState
    }
  };
  return (
    <>
      <form>
        <label>
          {props.name}
          <input ref={inputRef} onChange={onChange} type="checkbox" />
        </label>
      </form>
    </>
  );
};

export default CheckBox;
