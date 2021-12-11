import styled from "styled-components";

export const ButtonNav = styled.button`
    background-color:#1e2024;
    color:#c1c3c7;
    width:100%;
    height:50px;
    display: flex;
    border:none;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid  #393b40;
`
export const Button = styled.button`
    color:#1e2024;
    background-color:#c1c3c7;
    outline:none;
    border:2px solid #c1c3c7;
    font-size:16px;
    padding:6px 10px 5px 10px;
    border-radius:4px;
    font-family: 'Asap Condensed', sans-serif;;
    font-weight: 600;
    letter-spacing:0.7px;
    &:hover{
        padding:6px 10px 6px 10px;
        border:2px solid #c1c3c7;
        background-color:#1e2024;
        cursor:pointer;
        color:#c1c3c7;
    }
    &:focus,:active,:visited{
        padding:6px 10px 6px 10px;
        border:2px solid #2e8bff;
        background-color:#2e8bff;
        cursor:pointer;
        color:white;
    }
`