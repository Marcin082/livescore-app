import styled from 'styled-components'

export const Background = styled.div`
    @media (min-width: 1400px) {
        height:70px;
        background-color:#1e2024;
        margin:0 -200px;
    }
`
export const Logo = styled.img`
    height:50px;
    margin:0 auto;
    @media (max-width: 800px) {
        display:none;
    }
`
export const HeaderContainer = styled.div`
    height:70px;
    background-color:#1e2024;
    display:flex;
    align-items:center;
    padding:0 100px;
    justify-content:right;
    gap:20px;
    @media (min-width: 1400px) {
       margin: 0 -100px !important;
       padding:0 150px;
    }
`