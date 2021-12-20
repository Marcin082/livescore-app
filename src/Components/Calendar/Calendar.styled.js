import styled from "styled-components";



export const CalendarContainer = styled.div`
    display: flex;
    background-color: ${({ theme: { colors } }) => colors.graphit};
    margin-top: 30px;
    justify-content:space-between;
    text-align:center;
    padding:0;
    border-bottom:1px solid  ${({ theme: { colors } }) => colors.grey};
`

