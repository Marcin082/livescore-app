import React from 'react';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import {Logo,HeaderContainer,Background} from './Header.styled'
import {Link} from 'react-router-dom'
const index = () => {
    return (
        <Background>
            <HeaderContainer>
                <Nav/>
                <Link to="/"><Logo src={require('../../../assets/logo.png').default}/></Link>
                <Input/> 
            </HeaderContainer>
        </Background>
    );
};

export default index;