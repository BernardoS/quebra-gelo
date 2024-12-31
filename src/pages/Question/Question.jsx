import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { 
    QuestionContainer,
    HeaderQuestion,
    HeaderImage,
    HeaderSubtitle,
    QuestionBody
 } from "./styles";
import Logo from "../../assets/logo.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { 
    Exchange01Icon 
 } from "hugeicons-react";



const Question = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [theme, setTheme] = useState("");

    useEffect(() => {

        let themeParam = searchParams.get("tema");

        if (themeParam != null && themeParam != undefined && themeParam != "") {

            setTheme(themeParam);

        }

    }, []);

    return (
        <QuestionContainer>
            <HeaderQuestion onClick={() => navigate("/")}>
                <HeaderImage aria-label="Quebra Gelo" alt="Logo do Quebra Gelo" src={Logo} />
                <HeaderSubtitle>Me conta aí</HeaderSubtitle>
            </HeaderQuestion>
            <QuestionBody>
                <h2>O que você perguntaria para seu filho  se pudesse encontrá-lo hoje com a sua mesma idade?</h2>
                <PrimaryButton>
                    <Exchange01Icon  strokeWidth={2} />
                    Outro assunto
                </PrimaryButton>
            </QuestionBody>
            <Footer version="secondary" withMascot={true}/>
        </QuestionContainer>
    )
}

export default Question;