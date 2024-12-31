import styled from "styled-components";
import HeaderImageBackground from "../../assets/header-yellow.png";
import { device } from "../../layoutBreakpoints";

export const QuestionContainer = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
`;

export const HeaderQuestion  = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url(${HeaderImageBackground});
    background-size:cover;
    background-position:bottom;
    width:100%;
    padding:8px;
    box-sizing:border-box;
    flex-direction:column;
    cursor:pointer;
`;

export const HeaderImage = styled.img`
    max-width:462px;
    width:15%;
    transition: transform 0.2s ease;
    &:hover{
        transform: scale(1.05);
    }
    @media ${device.tablet} {
        width:50%;
        margin:10% 0%;
    }
`;

export const HeaderSubtitle = styled.h2`
  font-size:1.2rem;
  font-weight:800;  
  @media ${device.tablet} {
    display:none;
    }
`;

export const QuestionBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    align-self:center;
    text-align:center;
    h2{
        margin:unset;
    }
    h2.question{
        margin-bottom:32px;
    }
     @media ${device.tablet} {
        width:70%;
    }
`;