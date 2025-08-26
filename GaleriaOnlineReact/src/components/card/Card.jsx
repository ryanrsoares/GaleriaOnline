import "./Card.css"
// import imgCard from '../../assets/img/ulquiorra_144p.jpg'
import imgPen from '../../assets/img/pen.svg'
import imgTrash from '../../assets/img/trash.svg'

export const Card = ({tituloCard, imgCard, funcaoExcluir, funcaoEditar}) =>{
    return(
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img src={imgCard} className= "imgDoCard" alt="Imagem relacionada ao card." />
                <div className="icons">
                    <img onClick={funcaoEditar} src={imgPen} alt="icone de caneta para realizar uma alteração" />
                    <img onClick={funcaoExcluir} src={imgTrash} alt="icone de uma lixeira para realizar a exclusão" />
                </div>
            </div>
        </>
    )
}