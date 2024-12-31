import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

// Criando o contexto
const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
    const [themes, setThemes] = useState([]);
    const [questions, setQuestions] = useState([]);

    const loadThemes = async (data) => {
        const questionList = data;
        const categorias = data.map(pergunta => pergunta.categoria).flat();
        const categoriasUnicas = [...new Set(categorias)];

        let themeList = [];

        categoriasUnicas.forEach(categoriaUnica => {
            let primeiraPergunta =  questionList.filter((question)=>question.categoria.includes(categoriaUnica))[0];
            
            themeList.push({
                title: categoriaUnica,
                description:primeiraPergunta?.assunto
            })

        });
        
        setThemes(themeList);
    }

    const loadQuestions = async (data) =>{
        setQuestions(data);
    }

    // Função para carregar perguntas e temas do JSON
    const loadData = async () => {
        try {
            const response = await fetch("/data/base-perguntas.json");
            const data = await response.json();
            await loadQuestions(data);
            await loadThemes(data);
        } catch (error) {
            console.error("Erro ao carregar perguntas:", error);
        }
    };

    // Carrega as perguntas ao montar o componente
    useEffect(() => {
        loadData();
    }, []);

    return (
        <QuestionsContext.Provider value={{ themes, questions }}>
            {children}
        </QuestionsContext.Provider>
    );
};

QuestionsProvider.propTypes = {
    children: PropTypes.element
}


// Hook personalizado para acessar o contexto
export const useQuestions = () => {
    const context = useContext(QuestionsContext);
    if (!context) {
        throw new Error("useQuestions deve ser usado dentro de QuestionsProvider");
    }
    return context;
};

