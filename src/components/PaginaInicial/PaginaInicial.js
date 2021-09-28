import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';



const DivCentralizada= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color:#836FFF;
`
const Titulo= styled.h1`
font-size: 130px;
margin: 0%;
color:black;
`
const Slogan= styled.p`
font-size: 25px;
margin: 0%;
color: black;
`
const Botoes= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
`
export default class PaginaInicial extends React.Component{
    render(){
        return(
            <DivCentralizada>
                <Slogan>O talento certo no momento certo</Slogan>
                <Titulo>L A B E N I N J A</Titulo>
                <div>
                <Botoes>Se torne um ninja</Botoes>
                <Botoes>Contrate um ninja</Botoes>
                </div>
            </DivCentralizada>
        )
    }
}