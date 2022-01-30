import styled from "styled-components";
import {IoIosArrowForward} from  'react-icons/io';
import { Link } from "react-router-dom";
export const MatchListContainer = styled.div`
background-color:${({ theme: { colors } }) => colors.graphit};
    display: flex;
    flex-direction: column;
    padding-bottom:20px;

`
export const LeagueLink = styled(Link)`
    text-decoration:none;
`

export const LeagueDetails = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    color:white;
    font-family: 'Asap Condensed', sans-serif;
    letter-spacing:1px;
    padding-left:18px;
    &:hover{
        cursor:pointer;
        color: ${({ theme: { colors } }) => colors.blue} !important;
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
       text-align: left;
    }
    span{
        font-size:13px;
        font-weight:200;
        text-align: left;
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
