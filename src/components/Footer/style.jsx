import styled from "styled-components";
import FooterBlueImageBackground from "../../assets/footer-blue.png";
import FooterBlueImageMobileBackground from "../../assets/footer-mobile-blue.png";
import FooterYellowImageBackground from "../../assets/footer-yellow.png";
import { device } from "../../layoutBreakpoints";

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
    @media ${device.tablet} {
        &.home{
            background-image:url(${FooterBlueImageMobileBackground});
            height: 20rem;
            margin-top: -20rem;
            z-index: -1;
            justify-content:flex-end;
        }
        
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
    img{
        max-width:330px;
        width:20%;
        margin-top:-10%;
    }
    &:has(img){
        margin-top:10%;
    }
    @media ${device.tablet} {
        img{
            max-width:330px;
            width:50%;
            margin-top:-30%;
        }
        
    }

`;
