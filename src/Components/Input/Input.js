import React from 'react';
import {Input,InputStyle,SearchIcon} from './Input.styled'


const InputContainer = () => {
    return (
        <InputStyle>
            <Input type="text" placeholder="Search..."/>
            <SearchIcon/>
        </InputStyle>
    );
};

export default InputContainer;