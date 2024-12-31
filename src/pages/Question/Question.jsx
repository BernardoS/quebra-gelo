import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


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
        <div>
            <h1>Teste</h1>
            <h1>{theme}</h1>
        </div>
    )
}

export default Question;