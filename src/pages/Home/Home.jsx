import {
    HeaderHome,
    HeaderImage,
    HeaderSubtitle,
    HomeBody,
    HomeMascotImage,
    HomeSpan,
    HomeButtons,
    HomeContainer
} from "./styles";
import Footer from "../../components/PrimaryFooter/PrimaryFooter";
import Logo from "../../assets/logo.svg";
import MascotBlue from "../../assets/mascot-blue.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { 
    StickyNote02Icon,
    Idea01Icon 
 } from "hugeicons-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <HomeContainer>
            <HeaderHome>
                <HeaderImage aria-label="Quebra Gelo" alt="Logo do Quebra Gelo" src={Logo} />
                <HeaderSubtitle>Para você não ficar mais sem assunto</HeaderSubtitle>
            </HeaderHome>
            <HomeBody>
                <HomeMascotImage alt="um cubo de gelo ilustrado" aria-label="mascote do quebra gelo" src={MascotBlue} />
                <HomeSpan>Escolhe aí</HomeSpan>
                <HomeButtons>
                    <PrimaryButton type="button">
                        <Idea01Icon  strokeWidth={2} />
                        Puxar Assunto
                    </PrimaryButton>
                    <HomeSpan> ou </HomeSpan>
                    <SecondaryButton onClick={() => navigate("/temas")} type="button">
                        <StickyNote02Icon strokeWidth={2} stroke="2"/>
                        Escolher Tema
                    </SecondaryButton>
                </HomeButtons>
            </HomeBody>
            <Footer>
                <a href="https://github.com/BernardoS">Developed by BernardoS</a>
            </Footer>
        </HomeContainer>


    );

}

export default HomePage;