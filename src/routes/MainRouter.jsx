import { 
    BrowserRouter as Router, 
    Routes,
    Route 
} from "react-router-dom";
import HomePage from "../pages/Home/Home";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/temas" element={<HomePage/>} />
                <Route path="/perguntas" element={<HomePage/>} />
            </Routes>
        </Router>
    );    
}

export default MainRouter;
