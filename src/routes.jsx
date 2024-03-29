import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/proj_info_equipe" element={ < Home /> }></Route>
                <Route path="*" element={ < Error /> }></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default AppRoutes;