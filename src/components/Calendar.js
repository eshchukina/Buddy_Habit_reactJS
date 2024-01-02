import React, { useState } from 'react';
import moment from 'moment';

import "./Calendar.css";

const Heading = ({ date, changeMonth, resetDate }) => (
  <nav className="calendar--nav">
    <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
    <h1 onClick={() => resetDate()}>{date.format('MMMM')}
     <small>{date.format('YYYY')}</small></h1>
    <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
  </nav>
);

const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
  let className = [];

  if (moment().isSame(date, 'day')) {
    className.push('active');
  }

  if (date.isSame(startDate, 'day')) {
    className.push('start');
  }

  if (date.isBetween(startDate, endDate, 'day')) {
    className.push('between');
  }

  if (date.isSame(endDate, 'day')) {
    className.push('end');
  }

  if (!date.isSame(currentDate, 'month')) {
    className.push('muted');
  }

  return (
    <span onClick={() => onClick(date)} className={className.join(' ')}>{date.date()}</span>
  );
};

const Days = ({ date, startDate, endDate, onClick }) => {
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf('month');
  const previousMonth = moment(date).subtract(1, 'month');
  const previousMonthDays = previousMonth.daysInMonth();
  const nextMonth = moment(date).add(1, 'month');
  let days = [];
  let labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(<span className="label" key={i}>{moment().day(i).format('ddd')}</span>);
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day key={moment(previousMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(previousMonth)} startDate={startDate} endDate={endDate} />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day key={moment(thisDate).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(thisDate)} startDate={startDate} endDate={endDate} />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= (42 - daysCount); i++) {
    nextMonth.date(i);
    days.push(
      <Day key={moment(nextMonth).format('DD MM YYYY')} onClick={(date) => onClick(date)} currentDate={date} date={moment(nextMonth)} startDate={startDate} endDate={endDate} />
    );
  }

  return (
    <nav className="calendar--days">
      {labels}
      {days}
    </nav>
  );
};

const Calendar = ({ habitReps, onDateChange }) => {
  const [date, setDate] = useState(moment());
  const [startDate, setStartDate] = useState(moment().subtract(5, 'day'));
  const [endDate, setEndDate] = useState(moment().add(3, 'day'));


  const resetDate = () => {
    setDate(moment());
  };

  const changeMonth = (month) => {
    const newDate = moment(date);
    newDate.month(month);
    setDate(newDate);
  };

  const changeDate = (selectedDate) => {
    let newStartDate = startDate;
    let newEndDate = endDate;

    if (startDate === null || selectedDate.isBefore(startDate, 'day') || !startDate.isSame(endDate, 'day')) {
      newStartDate = moment(selectedDate);
      newEndDate = moment(selectedDate);
    } else if (selectedDate.isSame(startDate, 'day') && selectedDate.isSame(endDate, 'day')) {
      newStartDate = null;
      newEndDate = null;
    } else if (selectedDate.isAfter(startDate, 'day')) {
      newEndDate = moment(selectedDate);
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onDateChange(newStartDate, newEndDate);

  };

  return (
    <div className="calendar">
      <Heading date={date} changeMonth={changeMonth} resetDate={resetDate} />
      <Days onClick={changeDate} date={date} startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default Calendar;