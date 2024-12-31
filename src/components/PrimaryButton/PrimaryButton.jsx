import styled from "styled-components";

 
const PrimaryButton = styled.button`
    background-color:#FFBB38;
    padding:12px 24px;
    box-sizing:border-box;
    border:4px solid #1B1B1B;
    border-radius:16px;
    font-size:1rem;
    font-weight:700;
    font-family:"Inter", sans-serif;
    cursor:pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    &:hover{
        transform: scale(1.05) rotate(-1deg);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
    &:active{
        transform: scale(1.08) rotate(1deg);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        background-color:#fcc11c;
    }
`;

export default PrimaryButton;