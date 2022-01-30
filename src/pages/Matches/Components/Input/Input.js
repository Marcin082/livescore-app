import React, { useState } from 'react';
import {Input,InputStyle,Search,InputCard,Results,Option,Name,Logo} from './Input.styled'
import useMatches from '../../../../Hooks/UseMatches'
import { Link } from 'react-router-dom';

const InputContainer = () => {
    const{leagues} = useMatches();
    const[text,setText]= useState("")
    console.log(text)
    const searchedLeagues = leagues.filter(league=>(league.league_name).includes(text))
    console.log(searchedLeagues)
    return (
        
        <InputStyle>
            <InputCard>
            <Input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search a league"/>
            <Search>SEARCH</Search>
            </InputCard>
            {text&&
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