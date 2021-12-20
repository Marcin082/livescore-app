import styled from "styled-components";
import {Link} from 'react-router-dom';
export const WeekdayContainer = styled.div`
    font-size: 12px;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    display: flex;
    flex-direction:column;
    align-items:center;
    border-radius: 2px;
    min-width:114px;
    padding: 5px 0px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    span{
        
    }
    p{
        font-size: 24px;
        margin:  0 0;
        padding: 0;
        color:${({ theme: { colors } }) => colors.smokeWhite};
        
    }
`
export const DateLink = styled(Link)`
    text-decoration:none;
`