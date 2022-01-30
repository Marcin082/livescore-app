import React,{useState} from 'react';
import {CalendarContainer,Line} from './Calendar.styled'
import Weekday from '../../../../Components/Weekday/Weekday'
import useMatches from '../../../../Hooks/UseMatches';
const Calendar = ({dateformat,dates,OnClickHandler,activeDay}) => {
    const{getAllMatches} = useMatches();
    return (
        <CalendarContainer>
            {dates.map((date,index)=>{
                return <Weekday OnClickHandler={OnClickHandler} key={index} date={date} activeDay={activeDay}/>
            }
            )}
            
        </CalendarContainer>
    );
};

export default Calendar;