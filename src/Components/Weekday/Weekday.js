import React from 'react';
import { WeekdayContainer,DateLink } from './Weekday.styled';

const Weekday = ({OnClickHandler,date,activeDay}) => {
    let day = new Date(date);
    let today = new Date() 
    
    const dateformat = (date) =>{
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
    } 
    const activeStyle=(obj)=>{
        if(dateformat(day) === dateformat(activeDay)){
            return obj
        }
    }
    return (
        <DateLink style ={activeStyle({'borderBottom':`3px solid ${({ theme: { colors } }) => colors.graphit};`})} 
            onClick={()=>OnClickHandler(day)} to="/">
        <WeekdayContainer style ={dateformat(day) === dateformat(today)?{
                'width': '160px',
                
            }: 
            {'':''
            }} >
            <span style ={activeStyle({'color':`white`})} >{day.toLocaleDateString("en", { weekday: 'short' }).toUpperCase()}</span>
            <p style ={activeStyle({'color':`white`,'fontSize':'26.5px'})}>{dateformat(day) !== dateformat(today)? day.getDate() >9 ? day.getDate() : "0" + day.getDate(): "TODAY" }</p>
            <span style ={activeStyle({'color':`white`})}>{dateformat(day) !== dateformat(today)?day.toLocaleDateString("en", { month: 'short' }).toUpperCase():((day.getDate() >9 ? day.getDate() : "0" + day.getDate()) +" "+ day.toLocaleDateString("en", { month: 'short' }).toUpperCase())}</span>
            
        </WeekdayContainer>
        </DateLink>
    );
};

export default Weekday;