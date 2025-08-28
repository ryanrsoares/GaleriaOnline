import { Link } from "react-router-dom"
import "./Home.css"

export const Home = () => {
    return (
        <>
            <div className="inicio">
                <h1 className="titulozinho">BEM VINDO A GALERIA ONLINE</h1>
                <Link className="link_botao" to="/galeria">Entrar</Link>
            </div>
        </>
    )
}