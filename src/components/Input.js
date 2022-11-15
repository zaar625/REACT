import React, { useState } from 'react';
//인풋태그가 많지 않을 경우 아래와 같이 줄여서 사용가능하다.

const Input = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  return (
    <div>
      <input
        onChange={onChange}
        value={username}
        type="text"
        name="userName"
        placeholder="사용자명"
      />
      <input
        onChange={onChange}
        value={message}
        type="text"
        name="message"
        placeholder="사용자명"
      />
    </div>
  );
};

export default Input;
