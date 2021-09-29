import React from 'react';
import styled from 'styled-components';
import IconeFacebook from '../../img/facebook.png';
import IconeInstagram from '../../img/instagram.png';
import IconeLinkedin from '../../img/linkedin.png';
import IconeTwitter from '../../img/twitter.png';



const EstiloFooter = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: 1px solid black;
height: 500px;
margin-top: 160px;
`
const EstiloDiv1 = styled.div`
display: grid;
align-items: center;
justify-items: center;
background-color: #7867BF;
`
const EstiloDiv2 = styled.div`
display: grid;
align-items: center;
justify-items: center;
background-color: #7867BF;
// background: linear-gradient(white, 7867BF)
`
const EstiloInput = styled.input`
border: 2px solid black;
width: 400px;
height: 30px;

`
const EstiloInputMensagem = styled.input`
border: 2px solid black;
width: 400px;
height: 200px;
margin-bottom: 0px;

`
const EstiloButton = styled.button`
display: grid;
align-items: center;
justify-items: center;
width: 100px;
margin: 0px;
padding: 0px;
background-color:black;
color:white;
`
const EstiloIcones = styled.img`
width: 40px;
margin-left: 15px;
`


class Footer extends React.Component {

	render() {
		return (
		    <EstiloFooter>
                <EstiloDiv1>
                 <h2>Contato:</h2>
                 <p> Telefone: 0800-00000 <br/>
                     Fax: 0800-0000
                     <br/>
                     <br/>
                     Email: labeninjas@gmail.com</p>
                <span>
                 <a href="//www.facebook.com" target= "_blank"> <EstiloIcones src = {IconeFacebook} alt = 'ícone facebook'/></a>
                 <a href="//www.instagram.com" target= "_blank"> <EstiloIcones src = {IconeInstagram} alt = 'ícone instagram'/></a>
                 <a href="//www.linkedin.com" target= "_blank"> <EstiloIcones src = {IconeLinkedin} alt = 'ícone linkedin'/></a>
                 <a href="//www.twitter.com" target= "_blank"> <EstiloIcones src = {IconeTwitter} alt = 'ícone twitter'/></a>
                </span>
                
                 <p> <strong>Desenvolvedores:</strong> Carina Ferreira, Jessica Bento, Laura Laurena, Luigi Ribeiro, Paula Rabelo. </p>
                 </EstiloDiv1>

                <EstiloDiv2>
                 <EstiloInput
                 placeholder = "Nome"
                 />

                 <EstiloInput
                 placeholder = "Email"
                 /> 

                 <EstiloInput
                 placeholder = "Telefone"
                 /> 

                 <EstiloInputMensagem
                 placeholder = "Insira sua mensagem"
                 /> 
                
                 <EstiloButton>Enviar</EstiloButton>
                </EstiloDiv2>
                

            </EstiloFooter>
           
		);
	  }
	}
	

    export default Footer;