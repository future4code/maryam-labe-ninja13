import React from "react";
import styled from "styled-components";
import ninja from "../../img/ninja.png";
const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #56216D;
  height: 64px;
  border-bottom: 1px solid #121212; 
  button{
        box-shadow: black;
        margin: 0 16px;
        background-color: black;
        color: white;
        padding: 0 16px;
        border: 1px solid #1F001F;
        height: 56px;
        min-width: 2rem;
        transition: .5s ease-in-out;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        opacity: 0.6;
    }
    button:hover{
        position: relative;
        background-color: #1F001F;
        padding: 0 36px;
        border-radius: 4px;
        opacity: 0.9;
    }
    button:active{
        background-color:#6959CD ;
        border-radius: 4px;
    }
`;
const Button = styled.button`
  border: none;
  padding: 8px 60px;
  margin: 4px 2px;
  cursor: pointer;
`;
const ButtonHome = styled.button`
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
`;
const Img = styled.img`
  width: 27px;
  height: 36px;
  border-bottom: 8px;
`;
export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <ButtonHome onClick={this.props.paginaInicial}>
          <Img src={ninja} />
        </ButtonHome>
        <div>
          <Button onClick={this.props.paginaServicos}>Produtos</Button>
          <Button onClick={this.props.paginaCarrinho}>Carrinho</Button>
        </div>
      </ContainerHeader>
    );
  }
}