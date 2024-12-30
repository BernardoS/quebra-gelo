import styled from "styled-components";
import HeaderImageBackground from "../../assets/header-home.png";
import FooterImageBackground from "../../assets/footer-home.png";

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

export const HomeFooter = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url(${FooterImageBackground});
    background-size:cover;
    background-position:top;
    width:100%;
    padding:16px;
    box-sizing:border-box;
    flex-direction:column;
    min-height:5rem;
    a{
        font-size:12px;
        color: #1B1B1B;
    }
    
`;