import React from "react";
import styled from "styled-components";

const CardPequeno = styled.div`
background-color: #DDC3F8;
opacity: 0.9;
width: 245px;
height: 284px;
border: 2px solid black;
margin: 5px;
border-radius: 8px;
position: relative;
`
const CardGrande = styled.div`
background-color: #DDC3F8;
width: 244px;
height: 456px;
border: 2px solid black;
margin: 5px;
display: grid;
grid-template-rows:1fr 1fr;
border-radius: 8px;
box-shadow: 5px 5px 5px #A66AD3;
position:absolute;
z-index: 6;

button{
    height: 39px;
}
`

const Titulo = styled.h2`
text-align: center;
height: 72px;
margin: 10px;
margin-top: 20px;
`
const Info = styled.p`
text-align: center;
margin-top:15px;
margin-bottom: 20px;
padding: 3px;
`
const Linha = styled.hr`
width:200px;
border-top: 2px solid black;
border-bottom: 0px solid black;
justify-content: center;
align-items:center ;

`
const BotoesCard = styled.div`
display: flex;
justify-content: space-around;
grid-column: 0 -1;
margin-top: 20px;
margin-bottom:10px;

button{
    background-color:#CCA7F1;
    transition: .5s ease-in-out;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    border-color: #BC8AE6;
:hover{
    background-color: #BC8AE6;
    box-shadow: 5px 5px 5px #A66AD3;
}
:active{
    background-color:#A66AD3;
}
}
`

export default class CardDeServicos extends React.Component {

    state = {
        detalhes:false
    }
    clickDetalhes = ()=>{
		this.setState({detalhes: !this.state.detalhes})
	}
    renderizaCard = () => {
        switch(this.state.detalhes)
        {
            case false:
                return <CardPequeno>

                <Titulo>{this.props.titulo}</Titulo>
                {/* <Linha /> */}
                
                <Info>{this.props.data}</Info>
                
                <Info>R${this.props.preco}</Info>
                
                <BotoesCard>
                    
                    <button onClick={this.props.adicionarAoCarrinho}>Contratar</button>
                    <button onClick={this.clickDetalhes}>Detalhes</button>
                
                </BotoesCard>
            </CardPequeno>
            case true:
                return <CardGrande>
                <Titulo>{this.props.titulo}</Titulo>
                {/* <Linha /> */}
                
                <Info>{this.props.data}</Info>

                <Info>Formas de pagamento:{this.props.formasPagamento}</Info>
                <Info>R${this.props.preco}</Info>
                
                <Info>{this.props.descricao}</Info>
                
                <BotoesCard>
                    <button onClick={this.props.adicionarAoCarrinho}>Contratar</button>
                    <button onClick={this.clickDetalhes}>Detalhes</button>
                
                </BotoesCard>
            </CardGrande>
                
                
        }
    }
    render(){
        return (
            <div>
                {this.renderizaCard()}
            </div>
        )
    }
}