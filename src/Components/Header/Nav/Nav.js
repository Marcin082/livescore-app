import React,{ useState } from 'react';
import {NavStyle,NavLink,MenuIcon, CloseIcon} from './Nav.styled'
import DropdownNav from '../DropdownNav/DropdownNav';

const Nav = () => {
    const[screenWidth,setScreenWidth] = useState(0)
    const[dropdown,setDropdown] = useState(false)
    React.useEffect(() => {
        function handleResize() {
            if(window.innerWidth>800){
                setDropdown(false)
            }
          setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        })
    return (
        <>
        {!dropdown ? <MenuIcon onClick={()=>setDropdown(true)}/> : <CloseIcon onClick={()=>setDropdown(false)}/>}
        <NavStyle>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/matches">Matches</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/players">Players</NavLink>
        </NavStyle>
        {(screenWidth < 800 && dropdown) && <DropdownNav/>}
        </>
    );
};

export default Nav;