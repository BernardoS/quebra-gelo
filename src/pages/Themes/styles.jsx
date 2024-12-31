import styled from "styled-components";
import HeaderImageBackground from "../../assets/header-blue.png";

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
    cursor:pointer;
`;

export const HeaderImage = styled.img`
    max-width:300px;
    width:15%;
    transition: transform 0.2s ease;
    &:hover{
        transform: scale(1.05);
    }
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
