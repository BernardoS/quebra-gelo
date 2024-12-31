import { 
    BrowserRouter as Router, 
    Routes,
    Route 
} from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Themes from "../pages/Themes/Themes";
import Question from "../pages/Question/Question";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<HomePage/>} />
                <Route path="/quebra-gelo" element={<HomePage/>} />
                <Route path="/quebra-gelo/temas" element={<Themes/>} />
                <Route path="/quebra-gelo/pergunta" element={<Question/>} />
            </Routes>
        </Router>
    );    
}

export default MainRouter;
