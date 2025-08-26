import "./Card.css"
import imgCard from '../../assets/img/luffy.jpg'
import imgPen from '../../assets/img/pen.svg'
import imgTrash from '../../assets/img/trash.svg'

export const Card = ({tituloCard}) =>{
    return(
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img src={imgCard} className= "imgDoCard" alt="Imagem relacionada ao card." />
                <div className="icons">
                    <img src={imgPen} alt="icone de caneta para realizar uma alteração" />
                    <img src={imgTrash} alt="icone de uma lixeira para realizar a exclusão" />
                </div>
            </div>
        </>
    )
}