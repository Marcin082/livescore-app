import styled from "styled-components";
import {IoIosArrowForward} from  'react-icons/io';
export const MatchListContainer = styled.div`
    background-color:  #1e2024;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
`
export const CenterContainer = styled.div`
    margin: 0 auto;
    width:95%;
`
export const LeagueDetails = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    color:white;
    font-family: 'Asap Condensed', sans-serif;
    letter-spacing:1px;
    padding-left:10px;
    &:hover{
        cursor:pointer;
        color: #2e8bff;
    }
    section{
        display:flex; 
        align-items: center;
        gap:10px;
    }
    div{
       display:flex; 
       flex-direction: column;
       padding: 10px 0 5px 0;
       align-items: center;
       gap:7px;
    }
    span{
        font-size:14px;
        
    }
`
export const RightArrow = styled(IoIosArrowForward)`
    width:25px !important;
    height: 30px !important;
    margin-top: 10px;
`

export const CountryLogo = styled.img`
    width:40px;
    height:25px;
    object-fit: cover;
`
