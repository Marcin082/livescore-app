import styled from 'styled-components'
import {css} from 'styled-components'
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { GiSoccerField } from 'react-icons/gi';
import { IoShirtOutline } from 'react-icons/io5';
import { GiRosaShield } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const shareIcons = css`
 height:45px !important;
    width:39px !important;
    color:#c1c3c7;
    cursor:pointer;
    @media (min-width: 800px) {
        display:none;
    }
`
export const MenuIcon = styled(FiMenu)`
   ${shareIcons};
   width:31px !important;
`
export const CloseIcon = styled(IoClose)`
    ${shareIcons};
    position: fixed;
    z-index:2;
    transform: translate(-10px,-5px);
`
export const NavLink = styled(Link)`
    text-decoration:none;
    margin-right:25px;
    font-size:18px;
    color:#c1c3c7;
    border:2px solid #1e2024;
    &:hover{
        color:#2e8bff;
    }
    &:focus{
        border:none;
        border-bottom:2px solid #2e8bff;
    }
`
export const NavStyle = styled.div`
    display:flex;
    @media (max-width: 800px) {
        display:none;
    }
`
