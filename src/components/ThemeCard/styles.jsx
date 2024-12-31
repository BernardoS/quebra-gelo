import styled from "styled-components";

export const Card = styled.button`
    text-align: left;
    aspect-ratio:300/90;
    width:30%;
    padding:8px 16px;
    border:2px solid #1B1B1B;
    background-color:#FFF;
    border-radius:8px;
    box-shadow: 10px 10px 0px 1px rgba(0,0,0,1);
    -webkit-box-shadow: 10px 10px 0px 1px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 0px 1px rgba(0,0,0,1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor:pointer;
    &:hover{
        transform: scale(1.05);
    }
`;

export const CardTitle = styled.h3`
    font-size:18px;
    color: #1B1B1B;
    text-transform:capitalize;
`;

export const CardSubtitle = styled.p`
    font-size:12px;
    color: #1B1B1B;
    font-weight:200;
    line-height:2;
`;