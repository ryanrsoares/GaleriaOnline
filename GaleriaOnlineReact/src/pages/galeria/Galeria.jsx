import './Galeria.css'
import api  from "../../Services/services"

import icon from "../../assets/img/upload.svg"
import { Botao } from "../../components/botao/Botao"
import { Card } from '../../components/card/Card'
import { useEffect, useState } from 'react'

export const Galeria = () => {

    const [cards, setCards] = useState([]);
    const [imagem, setImagem] = useState(null);
    const [nomeImagem, setNomeImagem] = useState("");


    async function listarCards(){
        try {
            const resposta = await api.get("Imagem")
            console.log(resposta);
             setCards(resposta.data);
         
        } catch (error) {
            console.error("Erro ao listar: ", error);
            alert("erro ao listar!!")
        }
    }

    async function cadastrarCard(e){
        e.preventDefault();
        if (imagem && nomeImagem ) {
            try {

                // formData eh uma interface javaScript que permite construir um conjunto de pares chave/valor representando os dados de um fromulario HTML.
                const formData = new FormData()
                //append: anexar/acresentar/adicionar
                formData.append("Arquivo", imagem) 
                formData.append("Nome", nomeImagem)

                await api.post("Imagem/upload", formData,{
                    headers:{
                        "Content-Type" : "multipart/form-data"
                    }
                })

                alert("cadastrou :)")
            } catch (error) {
                alert("Nao foi possivel realizar o cadastro!!")
                console.error(error);
            }
        }else{
            alert("Preencha os campos de Nome e de Imagem!!!")
        }
    }

    function editarCard(id,nomeAntigo)
    {

        const novoNome = prompt("Digite o novo nome da imagem:", nomeAntigo);
        const inputArquivo = document.createElement("input");
        inputArquivo.type = "file";
        //aceita imagens independente das extensoes
        inputArquivo.accept = "image/*";
        //define o que acontece quando o usuario selecionar um arquivo
        inputArquivo.onchange = async (e) => {
            const novoArquivo = e.target.files[0];
            const formData = new FormData ();
            //adicionar o novo nome do formData
            formData.append("Nome", novoNome);
            formData.append("Arquivo", novoArquivo);

            if (formData) {
                try {
                    await api.put(`Imagem/${id}`, formData, {
                        headers:{
                            "Content-Type" : "multipart/form-data"
                        }
                    })

                    alert("ebaaa deu certin meu pia!! :) ")
                    listarCards();
                } catch (error) {
                    alert("Nao foi possivel alterar o card. Tente novamente mais tarde!!")
                    console.error(error);
                    
                }
            }
        };
        inputArquivo.click();
    }

    async function excluirCard(id){
        try {
            await api.delete(`Imagem/${id}`)
            alert("excluido com sucesso!!")
            listarCards();
        } catch (error) {
            alert("Erro ao excluir.")
            console.error(error);
        }    
    }

    useEffect(() =>{
        listarCards ();
    });
    return (
        <>
            <h1 className='tituloGaleria'>Galeria Online</h1>

            <form className='formulario' onSubmit={cadastrarCard} >
                <div className='campoNome'>
                    <label>Nome</label>
                    <input type="text" className='inputNome'
                    onChange={(e) => setNomeImagem(e.target.value)}
                    value={nomeImagem}
                    />
                </div>


                <div className='campoImagem'>
                    <label className='arquivoLabel'>
                        <i><img src={icon} alt="Icone de upload de imagem" /></i>
                        <input type="file" className='arquivoInput' 
                        onChange={(e) => setImagem(e.target.files[0])}
                        />
                    </label>
                </div>
                <Botao nomeBotao="Cadastrar" />
            </form>
            <div className='campoCards'>
                {cards.length > 0 ?(
                    cards.map((e) => (
                        <Card
                        key={e.id}
                        tituloCard={e.nome} 
                        imgCard={`https://localhost:7233/${e.caminho.replace("wwwroot/","")}`}
                        funcaoExcluir={() => excluirCard(e.id)}
                        funcaoEditar={() => editarCard(e.id, e.nome)}
                        />
                    ))
                    
                ): <p>Nenhum card cadastrado</p> }
                    
               
            </div>
        </>
    )
}