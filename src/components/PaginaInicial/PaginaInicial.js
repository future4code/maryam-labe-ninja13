import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import backInicioECards from '../../img/backInicioECards.png'

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
font-size: 130px;
margin-bottom:15%;
color:black;
position: absolute;
`
const Slogan= styled.p`
font-size: 26px;
margin-bottom: 30%;
color: black;
position: absolute;
`
const Botao1= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
/* z-index:1; */
top:60%;
left:52%;
display: flex;
justify-content:space-evenly;
`
const Botao2= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
/* z-index:1; */
top:60%;
right:52%;
display: flex;
justify-content:space-evenly;
`

export default class PaginaInicial extends React.Component{
    render(){
        return(
            <DivCentralizada>
                <img src={require("../../img/backInicioECards.png")}/>
                <Slogan>O talento certo no momento certo</Slogan>
                <Titulo>L A B E N I N J A</Titulo>
                <div>
                <Botao1>Se torne um ninja</Botao1>
                <Botao2>Contrate um ninja</Botao2>
                </div>
            </DivCentralizada>
        )
    }
}