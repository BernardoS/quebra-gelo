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
import Footer from "../../components/Footer/Footer";
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
                <HomeMascotImage  alt="um cubo de gelo ilustrado" aria-label="Cubo de gelo sorridente com luvas azuis" src={MascotBlue} />
                <HomeSpan>Escolhe aí</HomeSpan>
                <HomeButtons>
                    <PrimaryButton onClick={() => navigate("/pergunta")} type="button">
                        <Idea01Icon  strokeWidth={2} />
                        Puxar Assunto
                    </PrimaryButton>
                    <HomeSpan> ou </HomeSpan>
                    <SecondaryButton onClick={() => navigate("/temas")} type="button">
                        <StickyNote02Icon strokeWidth={2}/>
                        Escolher Tema
                    </SecondaryButton>
                </HomeButtons>
            </HomeBody>
            <Footer isHome={true} version="primary"/>
        </HomeContainer>


    );

}

export default HomePage;