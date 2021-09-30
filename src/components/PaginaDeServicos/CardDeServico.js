import React from "react";
import styled from "styled-components";

const CardPequeno = styled.div`
background-color: white;
opacity: 0.9;
width: 288px;
height: 284px;
border: 4px solid black;
margin: 5px;
`
const CardGrande = styled.div`
background-color: white;
opacity: 0.9;
width: 596px;
height: 284px;
border: 4px solid black;
margin: 5px;
display: grid;
grid-template-columns: 1fr 1fr;
`

const Titulo = styled.h2`
text-align: center;
height: 72px;
`
const Info = styled.p`
text-align: center;
`
const Linha = styled.hr`
width:200px;
border-top: 4px solid black;
border-bottom: 0px solid black;
justify-content: center;

`
const BotoesCard = styled.div`
display: flex;
justify-content: space-around;
grid-column: 0 -1;

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
                <Linha />
                
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
                <Linha />
                
                <Info>{this.props.data}</Info>
                
                <Info>R${this.props.preco}</Info>

                <Info>{this.props.descricao}</Info>
                <Info>Formas de pagamento:{this.props.formasPagamento}</Info>
                
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