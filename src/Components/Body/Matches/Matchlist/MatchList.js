import React from 'react';
import LeagueMatches from '../LeagueMatches/LeagueMatches';
import { MatchListContainer,CenterContainer,LeagueDetails,CountryLogo,RightArrow, MatchesContainer } from './MatchList.styled';

const MatchList = ({FilteredMatches}) => {
    const MyLeagues = [1,19,28,25,27,24,372,3,4,683,633,152,302,207,175,168,259]
    const ImportantLeagues =()=>{
        function Comparator(a, b) {
            if (a[0].country_name < b[0].country_name) return -1;
            if (a[0].country_name > b[0].country_name) return 1;
            return 0;
          }
         
        FilteredMatches.sort(Comparator)
        FilteredMatches.map((matches)=>{
            if((MyLeagues.map(String)).includes(matches[0].league_id)){ 
                const index =FilteredMatches.indexOf(matches);
                FilteredMatches.splice(index, 1);
                FilteredMatches.unshift(matches);
            }

        })
        
    }
    ImportantLeagues()
    console.log(FilteredMatches)
    return (
        <MatchListContainer>
            <CenterContainer>
        {FilteredMatches.map((leagueMatches,index)=>{
            return (
            <>
            <LeagueDetails>
                <section>
                    <div>
                        <CountryLogo src={leagueMatches[0].country_logo?leagueMatches[0].country_logo:leagueMatches[0].league_logo}/>
                    </div>
                    <div>
                        {leagueMatches[0].league_name}
                        <span>{leagueMatches[0].country_name}</span>
                    </div>
                    
                </section>
                <section>
                    <RightArrow/>
                </section>
            </LeagueDetails>
            <LeagueMatches key={index} leagueMatches={leagueMatches}/>
            </>
        )})
        }
        </CenterContainer>
        </MatchListContainer>
       
    );
};

export default MatchList;