import styled from "styled-components";
import {Link} from 'react-router-dom';
export const WeekdayContainer = styled.div`
    font-size: 14px;
    color:#c1c3c7;
    display: flex;
    flex-direction:column;
    align-items:center;
    border-radius: 2px;
    min-width:114px;
    padding: 5px 0px;
    font-family: 'Asap Condensed', sans-serif;
    span{
        
    }
    p{
        font-size: 24px;
        margin:  0 0;
        padding: 0;
        color:#c1c3c7;
        
    }
`
export const DateLink = styled(Link)`
    text-decoration:none;
`