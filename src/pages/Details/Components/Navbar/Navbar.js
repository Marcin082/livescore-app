import React from 'react';
import { Nav, Button} from './Navbar.styled';

const Navbar = ({ID,Id,activeOption,setActiveOption}) => {
    return (
        <Nav>
            {!Id&&<Button active={ activeOption==="Standings" ? "true" : "" } onClick={()=>setActiveOption("Standings")}>Standings</Button>}
            <Button active={ activeOption==="Results" ? "true" : "" }  onClick={()=>setActiveOption("Results")}>Results</Button>
            {!Id&&<Button active={ activeOption==="Upcoming" ? "true" : "" }  onClick={()=>setActiveOption("Upcoming")}>Upcoming</Button>}
            {ID&&<Button active={ activeOption==="Players" ? "true" : "" }  onClick={()=>setActiveOption("Players")}>Players</Button>}
        </Nav>
    );
};

export default Navbar;