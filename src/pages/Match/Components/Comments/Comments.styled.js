import styled from "styled-components";

export const CommentsContainer = styled.div`
    display: flex;
    text-align:center;
    flex-direction: column;
    width:100%;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    margin:0 auto;
    background-color: ${({ theme: { colors } }) => colors.graphit};
    border-radius: 5px ;
    margin-top:-30px;
    padding:20px 0;
`
export const CommentCard = styled.div`
    display: flex;
    text-align:center;
    gap:30px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    background-color: ${({ theme: { colors } }) => colors.graphit};
    border-bottom:1px solid ${({ theme: { colors } }) => colors.smokeWhite};
`

export const Comment = styled.span`
    display:flex;
    text-align:center;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    color: ${({ theme: { colors } }) => colors.smokeWhite};
    padding:10px;
    gap:5px;
`
export const Player = styled.span`
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    color: white;
    font-size:14px;
    font-weight:300;
    margin-top:1.5px;
`
export const Time = styled.span`
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    color: ${({ theme: { colors } }) => colors.smokeWhite};
    border-right:1px solid ${({ theme: { colors } }) => colors.smokeWhite};;
    padding:10px;
`
export const Alert = styled.p`
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    color: ${({ theme: { colors } }) => colors.blue};
    text-align: center;
    letter-spacing: 1px;
    font-size: 20px;
`
