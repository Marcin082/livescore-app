import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ResultCard from './Components/ResultCard/ResultCard';
import { BackArrow, LeagueContainer } from './Match.styled';
import useMatches from '../../Hooks/UseMatches'
import MatchDetailsNav from './Components/MatchDetailsNav/MatchDetailsNav';
import Details from './Components/Details/Details'
import { Link } from 'react-router-dom';
import Stats from './Components/Stats/Stats';
import Lineups from './Components/Lineups/Lineups';
import Comments from './Components/Comments/Comments';
import H2H from './Components/H2H/H2H';
import { StandingsContiner } from './Components/Standings/Standings.styled';
import Standings from './Components/Standings/Standings';

const Match = () => {
    let { id } = useParams();
    const{getMatch,getComments,activeMatch,getH2H,getStandings,getCountry} = useMatches();
    const[activeOption,setActiveOption] = useState("Details")
    const navigate = useNavigate()
    const GoBackHandler = () =>{
        navigate(-1)
    }
    const FirstTeamId = activeMatch.match_hometeam_id
    const SecondTeamId = activeMatch.match_awayteam_id
    const leagueId= activeMatch.league_id
    const countryName= activeMatch.country_name
    console.log(FirstTeamId,SecondTeamId)
    useEffect(()=>{
        getComments(id)
        getMatch(id)
        getH2H(FirstTeamId,SecondTeamId)
        getStandings(leagueId)
        getCountry(countryName)
    },[id,FirstTeamId,SecondTeamId,leagueId,countryName])
    let component = null;
    switch(activeOption){
        case "Details":
          component =   <Details/>
            break;
        
        case "Stats":
            component =   <Stats />
            break;
        
        case "Lineups":
            component =  <Lineups />
            break;
        case "Comment":
                component =  <Comments />

            break;
        case "H2H":
            component =  <H2H activeOption={activeOption} />
            break;
        case "Standings":
            component =  <Standings />
            break;
            
        default:
            component =  <Details />
        }
    return (
        <LeagueContainer>
            <BackArrow onClick={()=>GoBackHandler()}/>
            <ResultCard/>
            <MatchDetailsNav activeOption={activeOption} setActiveOption={setActiveOption}/>
            {component}
        </LeagueContainer>
    );
};

export default Match;