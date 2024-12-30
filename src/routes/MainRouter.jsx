import { 
    BrowserRouter as Router, 
    Routes,
    Route 
} from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Themes from "../pages/Themes/Themes";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/temas" element={<Themes/>} />
                <Route path="/perguntas" element={<HomePage/>} />
            </Routes>
        </Router>
    );    
}

export default MainRouter;
