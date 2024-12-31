import styled from "styled-components";
import FooterBlueImageBackground from "../../assets/footer-blue.png";
import FooterYellowImageBackground from "../../assets/footer-yellow.png";

export const PrimaryFooter = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url(${FooterBlueImageBackground});
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

export const SecondaryFooter = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url(${FooterYellowImageBackground});
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
