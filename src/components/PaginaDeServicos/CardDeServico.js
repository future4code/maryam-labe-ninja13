import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 10vw;
height: 10vh;


`

export default class CardDeServicos extends React.Component {
    state = {

    }

    render(){
        return (
            <Card>
                <h2>{this.props.titulo}</h2>
                <hr />
                <p>{this.props.data}</p>
                <p>R${this.props.preco}</p>
                <button>Contratar</button>
                <button>Detalhes</button>
            </Card>
        )
    }
}