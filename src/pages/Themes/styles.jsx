import styled from "styled-components";
import HeaderImageBackground from "../../assets/header-home.png";
import FooterImageBackground from "../../assets/footer-home.png";

export const ThemesContainer = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
`;

export const HeaderThemes  = styled.header`
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
    max-width:300px;
    width:15%;
`;

export const HomeMascotImage = styled.img`
    max-width:96px;
    width:15%;
`;

export const ThemesBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ThemesTitle = styled.h1`
    font-size:32px;
    color:#1B1B1B;
    margin:unset;
    text-align:center;
`;

export const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:80%;
    column-gap:1%;
    margin:32px 0px;
`;

export const Footer = styled.footer`
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
