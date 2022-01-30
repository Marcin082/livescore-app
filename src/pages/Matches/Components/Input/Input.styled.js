import styled from 'styled-components'
export const Input = styled.input`
    color:#1e2024;
    padding-left: 15px;
    font-size:16px;
    height:35px;
    width:500px;
    outline:none;
    border:none;
    background-color: ${({ theme: { colors } }) => colors.grey};
    margin-left:10px;
    color:${({ theme: { colors } }) => colors.smokeWhite};

    @media (min-width: 1068px) {
        width:350px;
    }
    @media (max-width: 800px) {
        width:100%;
    }
    
`
export const InputCard = styled.div`
    display: flex;
`
export const Option = styled.div`
    height:40px;
    width:100%;
    display: flex;
    align-items: center;
    gap:10px;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
    }
`
export const Logo = styled.img`
    max-width:40px;
`
export const Name = styled.span`
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    padding-left:10px;
`

export const Results = styled.div`
    position:absolute;
    max-height:335px;
    width:515.4px;
    margin: 377px 77px 0 0 ;
    overflow-y: scroll;
    background-color: ${({ theme: { colors } }) => colors.grey};
    color:${({ theme: { colors } }) => colors.smokeWhite};
    z-index:5;
`
export const Search = styled.button`
    padding:5px 15px;
    border:none;
    font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
    letter-spacing: 1px;
    font-weight:600;
    font-size:15px;
    height:36px;
    background-color: ${({ theme: { colors } }) => colors.blue};
    color:${({ theme: { colors } }) => colors.dark};
    &:hover{
        cursor: pointer;
        background-color: ${({ theme: { colors } }) => colors.smokeBlue};
        color:${({ theme: { colors } }) => colors.smokeWhite};
    }
`
export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:25px 0;
    background-color: ${({ theme: { colors } }) => colors.dark};
    border-radius: 0 10px 0 0 ;
`