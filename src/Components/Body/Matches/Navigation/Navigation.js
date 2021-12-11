import React from 'react';
import { Button, ButtonNav } from './Navigation.styled.';

const Navigation = ({setActiveOption}) => {
        
    return (
        <ButtonNav >
            <Button onClick={()=>setActiveOption("Live")}>LIVE</Button>
            <Button>MY MATCHES</Button>
            <Button>LEAGUES</Button>
            <Button>UPCOMING</Button>
            <Button onClick={()=>setActiveOption("Results")}>RESULTS</Button>
        </ButtonNav>
    );
};

export default Navigation;