import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import backInicioECards from '../../img/backInicioECards.png'
import '../../../src/App.css'

const DivCentralizada= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
/* background-color:#836FFF; */
img{
    position:relative ;
    width:100vw;
    height:100vh;
}
`
const Titulo= styled.h1`
font-size: 135px;
margin-bottom:5%;
color:black;
position: absolute;
`
const Slogan= styled.p`
font-size: 26px;
margin-bottom: 30%;
color: black;
position: absolute;
`
const Botao2= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
top:70%;
left:52%;
display: flex;
justify-content:space-evenly;
width: 200px;
transition: .5s ease-in-out;
cursor: pointer;
:hover{
    background-color: #A020F0;
}
:active{
    background-color: darkmagenta;
}
`
const Botao1= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
top:70%;
right:52%;
display: flex;
justify-content:space-evenly;
width: 200px;
transition: .5s ease-in-out;
cursor: pointer;
:hover{
    background-color: #A020F0;
}
:active{
    background-color:darkmagenta ;
}
`

export default class PaginaInicial extends React.Component{
    render(){
        return(
            <DivCentralizada>
                <img src={require("../../img/backInicioECards.png")}/>
                <Slogan>O talento certo no momento certo</Slogan>
                <Titulo>L A B E N I N J A</Titulo>
                <div>
                <Botao2 onClick= {this.props.paginaServicos}>Contrate um Ninja</Botao2>
                <Botao1 onClick={this.props.paginaCadastro}>Seja um Ninja</Botao1>
                </div>
            </DivCentralizada>
        )
    }
}