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
import { useQuestions } from "../../context/QuestionsContext";



const Question = () => {

    const navigate = useNavigate();

    const { questions } = useQuestions();

    const [searchParams] = useSearchParams();

    const [selectedQuestion, setSelectedQuestion] = useState({});

    useEffect(() => {
        getRandomQuestion();
    }, [questions, searchParams]);


    function getRandomQuestion() {
        let questionList = questions;

        const searchTheme = searchParams.get("tema");

        if (searchTheme) {
            questionList = questions.filter(question =>
                question.categoria.some(theme => theme == searchTheme) && question != selectedQuestion
            );
        }

        const randomIndex = Math.floor(Math.random() * questionList.length);
        const question = questionList[randomIndex];
        console.log(questionList);
        setSelectedQuestion(question);
    }

    return (
        <QuestionContainer>
            <HeaderQuestion onClick={() => navigate("/quebra-gelo")}>
                <HeaderImage aria-label="Quebra Gelo" alt="Logo do Quebra Gelo" src={Logo} />
                <HeaderSubtitle>Me conta aí</HeaderSubtitle>
            </HeaderQuestion>
            <QuestionBody>
                {selectedQuestion != null ? (
                    <>
                        <h2 className="question">{selectedQuestion?.assunto}</h2>
                        <PrimaryButton onClick={() => getRandomQuestion()}>
                            <Exchange01Icon strokeWidth={2} />
                            Outro assunto
                        </PrimaryButton>
                    </>
                ) :
                    (
                        <>
                            <h2>Ih rapaz... <br /></h2>
                            <p> Parece que teve um problema ao recuperar o assunto. Que tal voltar para a página inicial e tentar novamente?</p>
                        </>
                    )}


            </QuestionBody>
            <Footer version="secondary" withMascot={true} />
        </QuestionContainer>
    )
}

export default Question;