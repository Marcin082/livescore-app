import styled from 'styled-components'
import {css} from 'styled-components'
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { GiSoccerField } from 'react-icons/gi';
import { IoShirtOutline } from 'react-icons/io5';
import { GiRosaShield } from 'react-icons/gi';

export const DropdownStyle = styled.div`
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background:#1e2024;
    z-index:1;
    padding: 40px 80px;
    div{ 
        display: flex;
        align-items: center;
        cursor:pointer;
    }
    
`
export const OptionContainer = styled.div`
   display: flex;
    align-items: center;
    cursor:pointer;
`

export const DpLink = styled(Link)`
   font-size: 25px;
   font-weight: 700;
   color:#c1c3c7;
   text-decoration:none;
   ${OptionContainer}:hover &{
        color: #2e8bff;
    }
`
const sharedIconStyle = css`
    height:45px !important;
    width:29px !important;
    color:#c1c3c7;
    padding-right: 20px; 
    ${OptionContainer}:hover &{
        color: #2e8bff;
    }
`
export const ShirtIcon = styled(IoShirtOutline)`
    ${sharedIconStyle};
`
export const HomeIcon = styled(AiOutlineHome)`
    ${sharedIconStyle};
`
export const SoccerField = styled(GiSoccerField)`
    ${sharedIconStyle};
`

export const LogoIcon = styled(GiRosaShield)`
    ${sharedIconStyle};
`