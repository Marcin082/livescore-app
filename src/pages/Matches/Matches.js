import React,{useState} from 'react';
import Calendar from './Components/Calendar/Calendar';
import {MatchesContainer,Matchescard} from './Matches.styled'
import Navigation from './Components/Navigation/Navigation';
import MatchList from './Components/Matchlist/MatchList';
import useMatches from '../../Hooks/UseMatches';
import { CalendarFunctions } from '../../Helpers/CalendarFunctions';
import  Leagues  from './Components/Leagues/Leagues';
import Input from './Components/Input/Input'
import Loading from '../../Components/LoadingPage/Loading'

const Matches = () => {
    const today = new Date();
    const firstDay = new Date();
    const[activeDay,setActiveDay] = useState(today)
    const[screenWidth,setScreenWidth] = useState(window.innerWidth)
    const dateformat  = activeDay.getFullYear() + '-' + (activeDay.getMonth() + 1) + '-' + activeDay.getDate()
    const{getAllMatches,isLoading,getLeagues,getLeagueLogo} = useMatches();
   
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    React.useEffect(()=>{
        getAllMatches(dateformat)
        getLeagueLogo()
    },[activeDay])
      

    const dates = CalendarFunctions(activeDay,firstDay,screenWidth)

    const OnClickHandler=(day)=>{
        if(!isLoading){
            setActiveDay(day)
        }
    }
    console.log(activeDay)
    
    return (
    <>
        
        <MatchesContainer>
           <Leagues dateformat = {dateformat}/>
            <Matchescard>
            <Input/>
            <Calendar dateformat={dateformat} dates = {dates} OnClickHandler={OnClickHandler} activeDay={activeDay} />
            <Navigation dateformat={dateformat} />
            {isLoading?
            <Loading/>
            :
            <MatchList /> 
            }
            </Matchescard>
        </MatchesContainer>
   
    </>
    );
};

export default Matches;