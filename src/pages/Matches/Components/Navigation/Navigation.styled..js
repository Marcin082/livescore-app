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

export const Center = styled.div`
    background-color:${({ theme: { colors } }) => colors.graphit};;
    text-align:center;
    display: flex;
    flex-direction:column;
` 
export const Button = styled.button`
    outline:none;
    background-color:${
      props => props.active ==="true" ?
      ({ theme: { colors } }) => colors.smokeBlue: "transparent"
    };
    border:none;
    border-bottom:2px solid transparent !important;
    font-size:16px;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    font-weight: 500;
    padding:0 30px;
    letter-spacing:0.7px;
    height:100%;
    border-bottom:${
        props => props.active ==="true" ?
            '3px solid': 'none'
    };
    color:${
      props => props.active ==="true" ?
      ({ theme: { colors } }) => colors.smokeWhite: ({ theme: { colors } }) => colors.smokeWhite
    };
    border-color:${
        props => props.active ==="true" ?
        ({ theme: { colors } }) => colors.blue + '!important': 'none'
    };
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:${({ theme: { colors } }) => colors.blue};
    }
`