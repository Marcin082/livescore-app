import React from 'react';
import useMatches from '../../../../Hooks/UseMatches'
import { StatsContiner,Bars,StatCard,Numbers, Type,FirstBar, SecondBar } from './Stats.styled';
import {Alert} from '../../Components/Comments/Comments.styled'

const Stats = () => {
    const{activeMatch} = useMatches();
    let stats =null
    if(activeMatch.statistics){
         stats = activeMatch.statistics.slice(9)
        const ballpossesion = stats[9]
        stats.splice(9,1)
        stats.unshift(ballpossesion)
        console.log(stats.length)
    }
    
    return (
        
        <StatsContiner>{stats.length>1 ?
            <>
            { stats.map((stat)=>{
                let { home: homeValue,away: awayValue,type:statType } = stat;
                if(stat){
                let HomePercentages = ((homeValue/(parseInt(awayValue)+parseInt(homeValue)))*100)
                let AwayPercentages = ((homeValue/(parseInt(awayValue)+parseInt(homeValue)))*100)
                if(statType==='Ball Possession'){
                    HomePercentages = (homeValue).slice(0, -1)
                   AwayPercentages= (awayValue).slice(0, -1)
               }

                  return(
                    <StatCard>
                        <Numbers>
                            <span>{homeValue}</span>
                            <Type>{statType}</Type>
                            <span>{awayValue}</span>
                        </Numbers>
                        
                        <Bars>
                        <FirstBar HomePercentages ={HomePercentages}></FirstBar>
                        <SecondBar AwayPercentages={AwayPercentages}></SecondBar>
                        </Bars>
                    </StatCard>
                )  
                }
                
            })}</>:
        <Alert>This League has no Stats</Alert>}
        </StatsContiner>
    );
};

export default Stats;