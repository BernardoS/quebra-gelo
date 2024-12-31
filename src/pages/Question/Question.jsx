import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { QuestionContainer } from "./styles";


const Question = () => { 

    const [searchParams] = useSearchParams();

    const [theme,setTheme] = useState("");

    useEffect(()=>{
        
        let themeParam = searchParams.get("tema");

        if(themeParam != null && themeParam != undefined && themeParam != ""){

            setTheme(themeParam);

        }

    },[])

    return(
        <QuestionContainer>
            
            <h1>{theme}</h1>
            <Footer version="secondary"/>
        </QuestionContainer>
    )
}

export default Question;