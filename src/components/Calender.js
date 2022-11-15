import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  console.log('rendering');
  const [date, setDate] = useState([
    new Date(2022, 11, 11),
    new Date(2022, 11, 20),
  ]);
  return (
    <div>
      <Calendar onChange={setDate} selectRange={true} defaultValue={date} />
    </div>
  );
};

export default Calender;
// npm i react-calendar
