import styled from "styled-components";

export const H2HContainer = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
    width:100%;
    gap:15px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    margin:0 auto;
    background-color: ${({ theme: { colors } }) => colors.graphit};
    border-radius: 5px;
    padding: 20px 0 ;
    margin-top:-30px;
`