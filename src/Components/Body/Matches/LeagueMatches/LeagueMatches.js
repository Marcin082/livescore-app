import React from 'react';
import Match from '../Match/Match';

const LeagueMatches = ({leagueMatches}) => {
    return (
        
            <>
           {leagueMatches.map((match)=>{
               return <Match key={match.match_id} match={match} leagueMatches={leagueMatches}/>
           })}
           </>
    );
};

export default LeagueMatches;