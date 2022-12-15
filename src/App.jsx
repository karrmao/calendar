import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
console.log();
const App = () => {
  const daysInWeek = 7;

  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [eventForm, isOpenModalForm] = useState(false);
  const [events] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  //console.log(weekDates);

  const swichNextWeek = () => {
    setWeekStartDate(
      new Date(
        weekStartDate.setDate(new Date(weekStartDate).getDate() + daysInWeek)
      )
    );
  };

  const swichPrevWeek = () => {
    setWeekStartDate(
      new Date(
        weekStartDate.setDate(new Date(weekStartDate).getDate() - daysInWeek)
      )
    );
  };

  const showEventForm = () => {
    isOpenModalForm(true);
  };

  const closeEventForm = () => {
    isOpenModalForm(false);
  };

  const showCurentWeek = () => {
    setWeekStartDate(new Date());
  };
  return (
    <>
      <Header
        showEventForm={showEventForm}
        swichNextWeek={swichNextWeek}
        swichPrevWeek={swichPrevWeek}
        showCurentWeek={showCurentWeek}
        weekStartDate={weekStartDate}
      />
      <Calendar weekDates={weekDates} events={events} />
      {eventForm && <Modal closeEventForm={closeEventForm} />}
    </>
  );
};

export default App;
