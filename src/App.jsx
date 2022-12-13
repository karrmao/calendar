import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
  };

  render() {
    const { weekStartDate } = this.state;
    console.log(weekStartDate);
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    console.log(weekDates);

    return (
      <>
        <Header />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
