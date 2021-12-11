import React from 'react';
import {DropdownStyle,DpLink,HomeIcon, SoccerField, ShirtIcon,LogoIcon,OptionContainer} from './DropdownNav.styled';
const DropdownNav = () => {
    return (
        <DropdownStyle >
            <OptionContainer>
                <HomeIcon/>
                <DpLink to="/">Home</DpLink>
            </OptionContainer>
            <OptionContainer>
                <SoccerField/>
                <DpLink to="/matches">Matches</DpLink>
            </OptionContainer>
            <OptionContainer>
                <LogoIcon/>
                <DpLink to="/teams">Teams</DpLink>
            </OptionContainer>
            <OptionContainer>
                <ShirtIcon/>
                <DpLink to="/players">Players</DpLink>
            </OptionContainer>
        </DropdownStyle>
    );
};

export default DropdownNav;