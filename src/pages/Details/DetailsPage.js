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
import setDates from '../../Helpers/SetMatchDates.js';
import Loading from '../../Components/LoadingPage/Loading'
import LoadingMatches from '../../Components/LoadingMatches/LoadingMatches.js';

const DetailsPage = () => {
    let { leagueID,teamID,playerID } = useParams();
    const navigate  = useNavigate();
    const [activeOption,setActiveOption] = useState("Standings") 
    const{isLoading,getPlayer,getStandings,getLeague,player,standings,leagueMatches,getMatchesById,getTeam,team,getLeagueLogo} = useMatches();
    const today = new Date();
    const activeYear = today.getFullYear()
    const todayFormat = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const dates = setDates(activeOption,activeYear,todayFormat)
    const FromDate = dates[0]
    const ToDate = dates[1]
    console.log(standings)
    console.log(ToDate)
    useEffect(()=>{
        getStandings(leagueID)
    },[])
    useEffect(()=>{
        getPlayer(playerID)
        
        if(leagueID){
            
            getMatchesById(leagueID,FromDate,ToDate,"league_id")
        }
        if(playerID && player){
            getMatchesById(player.team_key,FromDate,ToDate,"team_id")
        }
        else{
            getMatchesById(teamID,FromDate,ToDate,"team_id")
        }
        getTeam(teamID)
        getLeague(leagueID)

    },[leagueID,teamID,activeOption,playerID])
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
            component =  <Players FromDate={FromDate} ToDate={ToDate} setActiveOption={setActiveOption}/>
            break;
        default:
            component =  <LeagueStandings />    
        }
    return (
        <LeagueContainer>
            <div>
            <BackArrow onClick={()=>GoBackHandler()}/>
            <LeagueDetails playerID ={playerID} teamID={teamID}/>
            <Navbar teamID={teamID} playerID={playerID} activeOption={activeOption} setActiveOption={setActiveOption}/>
            {!playerID && (isLoading?((activeOption==="Upcoming"||activeOption==="Results")?<LoadingMatches Gap='20'/>:<Loading/>):component)}
            </div>
            
        </LeagueContainer>
    );
};

export default DetailsPage;