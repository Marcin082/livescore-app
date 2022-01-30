import React, { useEffect, useState } from 'react';
import { LeagueContainer,ContentCard,Nav, Button} from './DetailsPage.styled.js';
import { useNavigate, useParams } from 'react-router';
import Navbar from './Components/Navbar/Navbar'
import LeagueStandings from './Components/LeagueStandings/LeagueStandings';
import useMatches from '../../Hooks/UseMatches'
import RoundMatches from './Components/RoundMatches/RoundMatches';
import LeagueDetails from './Components/Info/LeagueDetails';
import Players from './Components/Players/Players';
import{BackArrow} from '../Match/Match.styled'
import { Link } from 'react-router-dom';
import setDates from '../../Helpers/SetMatchDates.js';
import Loading from '../../Components/LoadingPage/Loading'

const DetailsPage = () => {
    let { id,ID,Id } = useParams();
    const navigate  = useNavigate();
    const [activeOption,setActiveOption] = useState(Id?"Results":"Standings") 
    const{isLoading,getStandings,getLeague,player,standings,leagueMatches,getMatchesById,getTeam,team,getLeagueLogo} = useMatches();
    const today = new Date();
    const activeYear = today.getFullYear()
    const todayFormat = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const dates = setDates(activeOption,activeYear,todayFormat)
    const FromDate = dates[0]
    const ToDate = dates[1]
    console.log(player)
    console.log(ToDate)
    useEffect(()=>{
        if(id){
            getStandings(id)
            getMatchesById(id,FromDate,ToDate,"league_id")
        }
        if(Id && player){
            getMatchesById(player.team_key,FromDate,ToDate,"team_id")
        }
        else{
            getMatchesById(ID,FromDate,ToDate,"team_id")
        }
        getTeam(ID)
        getLeague(id)

    },[id,ID,activeOption])
    console.log(leagueMatches)
    let component = null;
    
    const GoBackHandler = () =>{
        navigate(-1)
    }
    switch(activeOption){
        case "Standings":
            if(standings){
                component =   <LeagueStandings/>
            }
            break;
        case "Results":
            if(leagueMatches.length>1){
            component =  <RoundMatches activeOption={activeOption}/>
            }
            break;
        case "Upcoming":
            if(leagueMatches.length>1){
                component =  <RoundMatches activeOption={activeOption}/>
            }
            break;
        case "Players":
            component =  <Players/>
            break;
        default:
            component =  <LeagueStandings />    
        }
    return (
        <LeagueContainer>
            <div>
            <BackArrow onClick={()=>GoBackHandler()}/>
            <LeagueDetails ID={ID}/>
            <Navbar ID={ID} Id={Id} activeOption={activeOption} setActiveOption={setActiveOption}/>
            {isLoading?<Loading/>:component}
            </div>
            
        </LeagueContainer>
    );
};

export default DetailsPage;