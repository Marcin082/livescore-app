import React from "react";
import { CalendarContainer } from "./Calendar.styled";
import Weekday from "../../../../Components/Weekday/Weekday";
const Calendar = ({ dateformat, dates, OnClickHandler, activeDay }) => {
  return (
    <CalendarContainer>
      {dates.map((date, index) => {
        return (
          <Weekday
            OnClickHandler={OnClickHandler}
            key={index}
            date={date}
            activeDay={activeDay}
          />
        );
      })}
    </CalendarContainer>
  );
};

export default Calendar;
