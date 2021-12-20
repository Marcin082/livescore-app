import styled from "styled-components";

export const ButtonNav = styled.div`
    background-color:${({ theme: { colors } }) => colors.graphit};
    color:${({ theme: { colors } }) => colors.smokeWhite};
    width:100%;
    height:40px;
    display: flex;
    border:none;
    align-items:center;
    border-bottom:1px solid  ${({ theme: { colors } }) => colors.grey};
`
export const LeagueNav = styled.div`
    background-color:${({ theme: { colors } }) => colors.graphit};
    color:${({ theme: { colors } }) => colors.smokeWhite};
    width:96%;
    padding:5px 0 15px 20px;
    display: flex;
    border:none;
    align-items:center;
    gap:10px;
    overflow: hidden;
    &:hover{
        cursor:grab;   
    }
`
export const League = styled.div`
    color:${({ theme: { colors } }) => colors.smokeWhite};
    margin: 0 auto;
    display:inline-block;
    align-items:center;
    background-color:${({ theme: { colors } }) => colors.blue};
    border:none;
    font-size:13px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    font-weight: 400;
    padding:6px 10px;
    letter-spacing:0.7px;
   border-radius:35px;
   white-space: nowrap;
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:white;
    }
    &:focus,:active,:visited{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:white;
    }
`
export const Center = styled.div`
    background-color:${({ theme: { colors } }) => colors.graphit};;
    text-align:center;
    display: flex;
    flex-direction:column;
` 
export const Button = styled.button`
    color:${({ theme: { colors } }) => colors.smokeWhite};
    outline:none;
    background-color:transparent;
    border:none;
    border-bottom:2px solid transparent !important;
    font-size:16px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    font-weight: 500;
    padding:0 30px;
    letter-spacing:0.7px;
    height:100%;
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:${({ theme: { colors } }) => colors.blue};
    }
    &:focus,:active,:visited{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:${({ theme: { colors } }) => colors.blue};
        border-bottom: 3px solid ${({ theme: { colors } }) => colors.blue} !important;
    }
`