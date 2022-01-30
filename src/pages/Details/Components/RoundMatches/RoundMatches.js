import React from 'react';
import useMatches from '../../../../Hooks/UseMatches'
import { ResultsContainer,Round ,RoundCard} from './RoundMatches.styled';
import Match from '../../../../Components/Match/Match'
const RoundMatches = ({activeOption}) => {
    const{leagueMatches} = useMatches();
    
    console.log(leagueMatches)

    let MatchesByRound = []
        const LeagueMatches = leagueMatches.filter((match)=>match.league_year === "2021/2022")
        const rounds=[]
    
        for(let i = 0; i<LeagueMatches.length;i++){
        if(!rounds.includes(LeagueMatches[i].match_round)){
            MatchesByRound.push(LeagueMatches.filter(match=>match.match_round===LeagueMatches[i].match_round))
            rounds.push(LeagueMatches[i].match_round)
        }
        }
    console.log(MatchesByRound)
    let results = []
    if(activeOption==="Results"){
        for(let i = MatchesByRound.length;i >-1;i--){
            results.push(MatchesByRound[i])
        }
        
    }
    else{
        results=MatchesByRound
    }
    console.log(MatchesByRound)
    return (
        <ResultsContainer>
            {results && results.map((round,index)=>{
                if(round){
                return (
                    <RoundCard>
                        <Round>Matchday  {round[0].match_round}</Round>
                        <RoundContainer key={index} activeOption={activeOption} key={index} round={round}/>
                    </RoundCard>
                )
                }
            })}
        </ResultsContainer>
    );
};
const RoundContainer = ({activeOption,round}) => {
    let reversedmatches=[]
    if(activeOption==="Results"){
        for(let i = round.length;i >-1;i--){
        reversedmatches.push(round[i])
        }
    }
    else{
        reversedmatches = round
    }
    
    return (
        <>
            {reversedmatches && reversedmatches.map((match, index)=>{
                
                if(match){
                    return (
            <Match activeOption={activeOption} key={index} match={match}/>
            )
                }
            
        })}
        </>
    );
    
};

export default RoundMatches;