import React,{useState} from 'react';
import Calendar from '../Calendar/Calendar';
import {MatchesContainer,LoadingContainer} from './Matches.styled'
import Navigation from '../Navigation/Navigation';
import MatchList from '../Matchlist/MatchList';
import useMatches from '../../../../Hooks/UseMatches';
import { CircleSpinner } from "react-spinners-kit";
const Matches = () => {
    const today = new Date();
    const firstDay = new Date();
    const thirtyOne = [4,6,7,9,11]
    const[activeDay,setActiveDay] = useState(today)
    const[activeOption,setActiveOption] = useState("Results")
    const[screenWidth,setScreenWidth] = useState(window.innerWidth)
    const dateformat  = activeDay.getFullYear() + '-' + (activeDay.getMonth() + 1) + '-' + activeDay.getDate()

    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth)
        
    }
    
        window.addEventListener('resize', handleResize)
      })

    React.useEffect(()=>{
        switch(activeOption){
            case "Results":
                getAllMatches(dateformat)
                break;
            case "Live":
                console.log("hello")
                getLiveMatches(dateformat)
                break;
            default:
                getAllMatches(dateformat)
                
        }
    }
    ,[activeOption,activeDay])  
    const OnClickHandler=(day)=>{
            setActiveDay(day)
           
    }
    
    const CheckDaysInMonth = () =>{
        if(activeDay.getDate()>=1 && activeDay.getDate()<=3 &&  !thirtyOne.includes(activeDay.getMonth()) ){
        firstDay.setDate(activeDay.getDate() -4)
        }
        if(activeDay.getDate()>=1 && activeDay.getDate()<=3 &&  activeDay.getMonth() ===2){
            firstDay.setDate(activeDay.getDate() - 6)
        }
        else{
        firstDay.setDate(activeDay.getDate() - 3)
        }
    }
    const CheckMonth = () =>{
           activeDay.getDate()>3?firstDay.setMonth(activeDay.getMonth()):firstDay.setMonth(activeDay.getMonth()-1)
    }

    CheckDaysInMonth()
    CheckMonth()
    let dates=[]
    let j =0;
    for (let i = 1; i < 8 && j < 7 ;i++) {
        if(i===4){
            dates[j] += activeDay
        }
        else{
            dates[j] += firstDay
        } 
         firstDay.setDate(firstDay.getDate() + 1)  

        j++;  
    }  
    if(screenWidth<800){
        dates.shift()
        dates.pop()
    }
    const{getAllMatches,getLiveMatches,matches,isLoading} = useMatches();
    console.log(matches)

    const FilteredMatches = [];
    const ids=[];
    const FilterLeagues=()=>{
        for(let i=0;i<matches.length;i++){
            if(!ids.includes(matches[i].league_id)){
            FilteredMatches.push( matches.filter((match)=>matches[i].league_id === match.league_id))
           ids.push(matches[i].league_id)
        }
        }

    }
    FilterLeagues()
    
console.log(FilteredMatches)
    return (
    <>
        
        <MatchesContainer>
           
           <Calendar dates={dates} OnClickHandler={OnClickHandler} activeDay={activeDay} setActiveOption={setActiveOption}/>
           <Navigation setActiveOption={setActiveOption}/>
           {isLoading?
            <LoadingContainer>
                <CircleSpinner size={40} text-align="center" color="#2e8bff"/>
            </LoadingContainer>
            :
           <MatchList FilteredMatches={FilteredMatches}/> 
            }
        </MatchesContainer>
   
    </>
    );
};

export default Matches;