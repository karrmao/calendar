import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const daysInWeek = 7;

  const [weekStartDate] = useState(new Date());
  const [eventForm, isOpenModalForm] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  //console.log(weekDates);

  const showEventForm = () => {
    isOpenModalForm(true);
  };

  const closeEventForm = () => {
    isOpenModalForm(false);
  };

  return (
    <>
      <Header showEventForm={showEventForm} />
      <Calendar weekDates={weekDates} />
      {eventForm && <Modal closeEventForm={closeEventForm} />}
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     console.log(weekStartDate);
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
//     console.log(weekDates);

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

// export default App;
