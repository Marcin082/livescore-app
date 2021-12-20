import React,{useState,useRef} from 'react';
import Calendar from '../../Components/Calendar/Calendar';
import {MatchesContainer,LoadingContainer} from './Matches.styled'
import Navigation from '../../Components/Navigation/Navigation';
import MatchList from '../../Components/Matchlist/MatchList';
import useMatches from '../../Hooks/UseMatches';
import { CircleSpinner } from "react-spinners-kit";
import { CalendarFunctions } from '../../Helpers/CalendarFunctions';
const Matches = () => {
    const today = new Date();
    const firstDay = new Date();
    const[activeDay,setActiveDay] = useState(today)
    const[screenWidth,setScreenWidth] = useState(window.innerWidth)
    const dateformat  = activeDay.getFullYear() + '-' + (activeDay.getMonth() + 1) + '-' + activeDay.getDate()
    const{getAllMatches,isLoading} = useMatches();
    
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    React.useEffect(()=>{
        getAllMatches(dateformat)
    }
    ,[activeDay])  
    const dates = CalendarFunctions(activeDay,firstDay,screenWidth)

    const OnClickHandler=(day)=>{
        setActiveDay(day)
    }
    
    return (
    <>
        
        <MatchesContainer>
           
           <Calendar dateformat={dateformat} dates = {dates} OnClickHandler={OnClickHandler} activeDay={activeDay} />
           <Navigation dateformat={dateformat} />
           {isLoading?
            <LoadingContainer>
                <CircleSpinner size={40} text-align="center" color="#2e8bff"/>
            </LoadingContainer>
            :
           <MatchList /> 
            }
        </MatchesContainer>
   
    </>
    );
};

export default Matches;