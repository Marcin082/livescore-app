import React from 'react';
import { CircleSpinner } from "react-spinners-kit";
import { LoadingContainer } from './Loading.styled';
const Loading = () => {
    return (
        <LoadingContainer>
                <CircleSpinner size={40} text-align="center" color="#2e8bff"/>
        </LoadingContainer>
    );
};

export default Loading;