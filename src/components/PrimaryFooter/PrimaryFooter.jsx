import styled from "styled-components";
import FooterImageBackground from "../../assets/footer-home.png";

const Footer = styled.footer`
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

export default Footer;