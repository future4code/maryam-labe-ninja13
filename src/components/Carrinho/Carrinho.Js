import React from "react";
import styled from "styled-components";

const ContainerTotal = styled.div`
    display: inline-flex;
    width:98vw;
    height:74.5vh;
    background-color: #DDC3F8;
     
`
const ContainerList = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width:50vw;
    background-color: #DDC3F8;  
`
const ContainerValorTotal = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 20px;
    button{
        background-color: #7867BF;
        color: black;
        border: 1px solid black;
        width: 150px;
        height: 40px;
        cursor: pointer;
        margin-left:20px;
        border-radius: 6px;
    }
    p{
        margin-left:20px;
    }
`
const ContainerImagem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:48vw;
    height: 100vh;
    img{
        height: 100vh;
        width:100%; 
        }
`
const ContainerItens = styled.div`
    display: flex;
    width:30vw;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top:18px;
    border-radius: 8px;
    background-color: #CCA7F1; 
    height: 2em;
    font-size: 16px;
    button{
        background-color: #7867BF;
        color: black;
        border: 1px solid black;
        width: 70px;
        height: 25px;
        cursor: pointer;
        margin-left:20px;
        border-radius: 6px;
    }
`





export default class Carrinho extends React.Component{

  

    render (){
        console.log(this.props.servicoCarrinho)
            const listaCarrinho = this.props.servicosCarrinho.map((servico, index) =>{
                return  <ContainerItens key={servico.id}>
                            <h3>{servico.title}</h3>
                            R${servico.price},00
                            <button onClick={() => this.props.removerDoCarrinho(index)}>Remover</button>
                        </ContainerItens>     
           })
               
        return (
          <ContainerTotal> 
               <ContainerList>
                {listaCarrinho}
                
                <ContainerValorTotal>
                <h3>Valor Total:</h3>

                  <p>R$ {this.props.precoTotal},00</p>                
                  <button onClick={() => this.props.removerTudo()}>Contratar Serviços</button>
                </ContainerValorTotal>
             
                </ContainerList>
                <ContainerImagem>
                    <img src={require('../../img/back-carrinho.jpg')} alt="homem feliz por ser cadastrar no ninja" />
                </ContainerImagem>
            
          </ContainerTotal>

        )
    }
}