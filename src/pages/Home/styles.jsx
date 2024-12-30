import styled from "styled-components";
import HeaderImageBackground from "../../assets/header-home.png";

export const HomeContainer = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
`;

export const HeaderHome  = styled.header`
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
`;

export const HeaderImage = styled.img`
    max-width:462px;
    width:15%;
`;

export const HeaderSubtitle = styled.h2`
  font-size:1.2rem;
  font-weight:800;  
`;

export const HomeBody = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:16px;
`;

export const HomeMascotImage = styled.img`
    max-width:300px;
    width:20%;
`;

export const HomeSpan = styled.span`
    font-size:1rem;
    font-weight:700;  
`;

export const HomeButtons = styled.div`
    display:flex;
    gap:32px;
    margin-top:32px;
    align-items:center;
`;