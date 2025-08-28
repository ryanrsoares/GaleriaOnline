import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Galeria } from "../pages/galeria/Galeria"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/galeria" element={<Galeria/>}/>
            </Routes>
        </BrowserRouter>
    )
}
