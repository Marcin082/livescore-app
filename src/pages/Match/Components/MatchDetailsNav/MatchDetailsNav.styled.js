import styled from "styled-components";
export const NavCard = styled.div`
    display:flex;
    transform:translatey(-42px);
    justify-content:space-around;
    text-align:center;
`


export const Option = styled.button`
    padding: 9px 10px;
    width:100%;
    border:none;
    background:transparent;
    outline:none;
    font-size:16px;
    color:${
      props => props.active ==="true" ?
          "white": ({ theme: { colors } }) => colors.smokeWhite
    };
    border-bottom:${
        props => props.active ==="true" ?
            '4px solid': 'none'
    };
    border-color:${
        props => props.active ==="true" ?
        ({ theme: { colors } }) => colors.blue + '!important': 'none'
    };
    font-family:${({ theme: { fonts } }) => fonts.robotoFont};
    letter-spacing:1px;
    border-bottom:4px solid transparent;
    margin:auto;
    cursor:pointer;
    &:hover{
        color:white;
    }
`
