import React, { useState,useRef } from 'react';
import ChooseLeague from './ChooseLeague';
import { Button, ButtonNav, Center, LeagueNav,League} from './Navigation.styled.';
import UseMatches from '../../Hooks/UseMatches'
import useScrollOnDrag from 'react-scroll-ondrag';

const Navigation = ({dateformat}) => {
    const{getAllMatches,getLiveMatches,getFavMatches} = UseMatches()
    return (
    <Center>
        <ButtonNav>
            <Button onClick={()=>getLiveMatches(dateformat) }>LIVE</Button>
            <Button onClick={()=>getFavMatches()}>MY MATCHES</Button>
            <Button onClick={()=>getAllMatches(dateformat)}>All</Button>
        </ButtonNav>
        <Leagues dateformat={dateformat}/>
    </Center>
    );
};

const Leagues = ({dateformat}) => {
    const[showLeague,setShowLeague] = useState(false)
    const{getLeagues,FilterByLeague} = UseMatches()
    const ref = useRef();
    const { events } = useScrollOnDrag(ref);
    return (
    <>
        <LeagueNav {...events} ref={ref} >
            <League onClick={()=>FilterByLeague("152",dateformat)}>Premier League</League>
            <League onClick={()=>FilterByLeague("302",dateformat)}>La Liga</League>
            <League onClick={()=>FilterByLeague("207",dateformat)}>Serie A</League>
            <League onClick={()=>FilterByLeague("175",dateformat)}>Bundesliga</League>
            <League onClick={()=>FilterByLeague("168",dateformat)}>League 1</League>
            <League onClick={()=>FilterByLeague("3",dateformat)}>Champions League</League>
            <League onClick={()=>FilterByLeague("4",dateformat)}>Europa League</League>
            <League onClick={()=>FilterByLeague("683",dateformat)}>Conference League</League>
            <League onClick={()=>FilterByLeague("633",dateformat)}>Nations League</League>
            <League onClick={()=> {
                setShowLeague(true)
                getLeagues()
            } }>All</League>
        </LeagueNav>
        {showLeague&&<ChooseLeague dateformat={dateformat} setShowLeague={setShowLeague} FilterByLeague={FilterByLeague}/>}
    </>
    );
    };

export default Navigation;