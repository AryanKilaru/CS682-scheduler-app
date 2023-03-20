import React, { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = [ "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const handlePrevClick = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextClick = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const renderCalendarHeader = () => {
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return (
      <div>
        <button onClick={handlePrevClick}>Prev</button>
        <div>{month} {year}</div>
        <button onClick={handleNextClick}>Next</button>
      </div>
    );
  };

  const renderCalendarWeekdays = () => {
    return (
      <div>
        {weekdays.map((weekday) => (
          <div key={weekday}>{weekday}</div>
        ))}
      </div>
    );
  };

  const renderCalendarDays = () => {
    const startOfMonth = new Date(date.getUTCFullYear(), date.getUTCMonth(), 1);
    const endOfMonth = new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);

    const daysInMonth = [];
    let day = startOfMonth;

  while (day <= endOfMonth) {
    daysInMonth.push(new Date(Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate())));
    day.setUTCDate(day.getUTCDate() + 1);
  }

    const days = [];

    for (let i = 0; i < startOfMonth.getUTCDay(); i++) {
        days.push(<div key={`empty-${i}`} className="empty"></div>);
      }
    
      daysInMonth.forEach((day) => {
        days.push(
          <div key={day.toString()} className="day">
            <button onClick={() => handleDayClick(day)}>
              {day.getUTCDate()}
            </button>
          </div>
        );
    });

    return <div className="days">{days}</div>;
  };

  const handleDayClick = (day) => {
    // Implement your logic for opening a modal for the clicked day here
    console.log(`Clicked on day ${day}`);
  };

  return (
    <div className="calendar">
      {renderCalendarHeader()}
      {renderCalendarWeekdays()}
      {renderCalendarDays()}
    </div>
  );
};

export default Calendar;
