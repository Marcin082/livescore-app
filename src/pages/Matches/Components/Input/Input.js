import React, { useEffect, useState } from 'react';
import {Input,InputStyle,Search,InputCard,Results,Option,Name,Logo} from './Input.styled'
import useMatches from '../../../../Hooks/UseMatches'
import { Link } from 'react-router-dom';

const InputContainer = ({showResults,setShowResults}) => {
    const{leagues} = useMatches();
    const[text,setText]= useState("")
    console.log(text)
    const searchedLeagues = leagues.filter(league=>(league.league_name).includes(text))
    console.log(searchedLeagues)
    console.log(showResults)
    useEffect(()=>{
        if(text){
            setShowResults(true)
        }
    },[text])
    const handleChildElementClick = (e) => {
        e.stopPropagation()
        if(text){
            setShowResults(true)
        }
     }
    return (
        
        <InputStyle >
            <InputCard>
            <Input onClick={(e) => handleChildElementClick(e)} type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search for league"/>
            <Search>SEARCH</Search>
            </InputCard>
            {text&&showResults&&
            <Results>
            {searchedLeagues.map((league)=>{
                return(
                    <Link style={{
                        textDecoration:'none',
                        }} to={"league/" + league.league_id}>
                    <Option>
                    <Name>{league.league_name}</Name>
                    <Logo src={league.country_logo}/>
                    </Option>
                    </Link>
                    
                )
            })}
            </Results>
            }
        </InputStyle>
       

        
    );
};

export default InputContainer;