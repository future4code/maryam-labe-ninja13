import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 288px;
height: 284px;
border: 2px solid black;
margin: 5px;
`

const Titulo = styled.h2`
text-align: center;
`
const Info = styled.p`
text-align: center;
`

const BotoesCard = styled.div`
display: flex;
justify-content: space-around;

`

export default class CardDeServicos extends React.Component {
    state = {

    }

    render(){
        return (
            <Card>
                <Titulo>{this.props.titulo}</Titulo>
                <hr />
                <Info>{this.props.data}</Info>
                <Info>R${this.props.preco}</Info>
                <BotoesCard>
                    <button onClick={this.props.adicionarAoCarrinho}>Contratar</button>
                    <button>Detalhes</button>
                
                </BotoesCard>
            </Card>
        )
    }
}