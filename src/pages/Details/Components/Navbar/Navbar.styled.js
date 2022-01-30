import styled from "styled-components";
export const Nav = styled.div`
    display:flex;
    justify-content:left;
    align-items: center;
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const Button = styled.button`
    padding:9px 17px;
    border:none;
    font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
    letter-spacing: 1px;
    font-weight:500;
    letter-spacing: 1px;
    font-size:17px;
    background-color: transparent;
    color:${
      props => props.active ==="true" ?
          "white": ({ theme: { colors } }) => colors.smokeWhite
    };
    border-bottom:4px solid;
    border-color:${
        props => props.active ==="true" ?
        ({ theme: { colors } }) => colors.blue + '!important': 'transparent'
    };
    &:hover{
        cursor: pointer;
        color:white;
        border:none;
        border-bottom:4px solid ${({ theme: { colors } }) => colors.blue} !important;
    }
`