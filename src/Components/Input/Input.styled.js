import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
export const Input = styled.input`
    color:#1e2024;
    padding-left: 15px;
    font-size:16px;
    height:35px;
    width:250px;
    outline:none;
    border: 2px solid ${({ theme: { colors } }) => colors.grey};
    border-radius: 17px;
    background-color: ${({ theme: { colors } }) => colors.smokeWhite};
    margin-left:10px;
    @media (min-width: 1068px) {
        width:350px;
    }
    @media (max-width: 800px) {
        width:100%;
    }
    
`


export const SearchIcon = styled(FaSearch)`
    color:${({ theme: { colors } }) => colors.graphit};
   position: absolute;
    margin-left:88%;
    height:45px !important;
    width:20px !important;
    cursor: pointer;
    @media (max-width: 800px) {
        margin-left:95%;

    }

`
export const InputStyle = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position: relative;
     @media (max-width: 800px) {
        width:92%;
        margin-right: 10px;
    }
    
`