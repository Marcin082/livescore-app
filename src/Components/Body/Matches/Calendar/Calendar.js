import React,{useState} from 'react';
import {CalendarContainer,Line} from './Calendar.styled'
import Weekday from '../Weekday/Weekday'

const Calendar = ({dates,OnClickHandler,activeDay,setActiveOption}) => {
    return (
        <CalendarContainer onClick={()=>setActiveOption("Results")}>
            {dates.map((date,index)=>{
                return <Weekday OnClickHandler={OnClickHandler}key={index} date={date} activeDay={activeDay}/>
            }
            )}
            
        </CalendarContainer>
    );
};

export default Calendar;