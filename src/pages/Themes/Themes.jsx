import {
    ThemesContainer,
    HeaderThemes,
    HeaderImage,
    HomeMascotImage,
    ThemesBody,
    ThemesTitle,
    CardContainer
} from "./styles";
import Footer from "../../components/PrimaryFooter/PrimaryFooter";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Logo from "../../assets/logo.svg";
import MascotBlue from "../../assets/mascot-blue.svg";
import { useState } from "react";
import ThemeCard from "../../components/ThemeCard/ThemeCard";
import { useNavigate } from "react-router-dom";


const Themes = () => {

    const [themes, setThemes] = useState([
        {
            title: "preferência",
            description: "Se pudesse escolher uma habilidade para dominar instantaneamente, qual seria?"
        }
        , {
            title: "futuro",
            description: "Se pudesse viver em qualquer época, passada ou futura, qual escolheria?"
        }
    ]);

    const navigate = useNavigate();


    return (
        <ThemesContainer>
            <HeaderThemes>
                <HeaderImage aria-label="Quebra Gelo" alt="Logo do Quebra Gelo" src={Logo} />
                <HomeMascotImage alt="um cubo de gelo ilustrado" aria-label="mascote do quebra gelo" src={MascotBlue} />
            </HeaderThemes>
            <ThemesBody>
                <ThemesTitle>
                    Escolha um tema para <br /> conversar
                </ThemesTitle>

                <CardContainer>
                    {themes.map((theme) => (
                        <ThemeCard key={theme.title} onClickHandler={() => navigate(`/pergunta?tema=${theme.title}`)} title={theme.title} description={theme.description} />
                    ))}
                </CardContainer>
                

            </ThemesBody>
            <Footer>
                <a href="https://github.com/BernardoS">Developed by BernardoS</a>
            </Footer>
        </ThemesContainer>
    );
}

export default Themes