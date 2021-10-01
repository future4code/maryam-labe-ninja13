import React from "react";
import styled from "styled-components";
import ninja from '../../img/ninja.png';

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #7869BF;
`
const Button = styled.button`
    border: none;
    padding: 8px 60px;
    margin: 4px 2px;
    cursor: pointer;
`
const ButtonHome = styled.button`
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
`
const Img = styled.img`
    width: 30px;
    height: 40px;
`

export default class Header extends React.Component{
    render(){
    return(
        <ContainerHeader>
            <ButtonHome onClick= {this.props.paginaInicial}><Img src={ninja}/></ButtonHome>         
            <div>
                <Button onClick= {this.props.paginaInicial}>Home</Button>
                <Button onClick= {this.props.paginaServicos}>Carrinho</Button>
            </div>
        </ContainerHeader>
        )

    }
}