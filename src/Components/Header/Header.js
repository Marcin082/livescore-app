import React from 'react';
import Input from '../Input/Input';
import {Logo,HeaderContainer,Background} from './Header.styled'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <Background>
            <HeaderContainer>
                <Link to="/"><Logo src={require('../../assets/logo.png').default}/></Link>
                <Input/> 
            </HeaderContainer>
        </Background>
    );
};

export default Header;