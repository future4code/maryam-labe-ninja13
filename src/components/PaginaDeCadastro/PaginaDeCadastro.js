import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerText = styled.div`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 100vh;
   width:50vw;

   img{
    height: 100vh;
    width:100%; 
    }

    img:hover{
        filter: hue-rotate(20deg);
     -webkit-filter: hue-rotate(20deg);
    }
    
    h1{
      position: absolute;
      font-size: 40px;
      color:#191970;
      flex-direction: column;
      text-align: center;
   
      line-height: 30px;
      height: 30px;
      transition: .6s ease-in-out;
    }

    h4{
      position: absolute;
      font-size: 23px;
      color:#191970;
      flex-direction: column;
      text-align: center;
      top: 230px;
      width: 250px;
      line-height: 30px;
      height: 30px; 
    }

`

const ContainerCard = styled.div`
    display: inline-flex;
    width:100%;
`

const ContainerCadastro = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:50%;
    height: 100vh;
    background-color: #7867BF;

    input{
        border-radius: 8px;
        border: none;
        margin-top: 15px;
        width:30em;
        height: 2em;
        font-size: 16px;  
    }

    select{
        margin-top: 15px;
        border-radius: 8px;
        border: none;
        width: 33.5vw;
        height: 5em;
        font-size: 16px; 
    }


    button{
        margin-top: 20px;
        background-color: #7867BF;
        color: black;
        padding: 1rem 2rem;
        border: 1px solid black;
        min-width: 2rem;
        transition: .5s ease-in-out;
        cursor: pointer;
        border-radius: 4px;
    }

    button:hover{
        background-color: #836FFF;
        border-radius: 4px;
    }
    button:active{
        background-color:#6959CD ;
        border-radius: 4px;
    }
`

export default class PaginaDeCadastro extends React.Component{
    state={

        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: ''

    }

    handleTitulo = (e)=>{
        this.setState({title: e.target.value})
    }

    handleDescricao = (e)=>{
        this.setState({description: e.target.value})
    }

    handlePreco = (e)=>{
        this.setState({price: e.target.value})
    }

    handleFormaDPagamento = (e)=>{
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({paymentMethods: value})
    }

    handleData = (e)=>{
        this.setState({dueDate: e.target.value})
    }


    criarEmprego = ( ) =>{
        
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate
        }
    
        const url = "https://labeninjas.herokuapp.com/jobs"
        
        axios.post(url, body, { 
            headers:{
            Authorization: "2bdafc4e-63bc-428c-8b6e-154eedb905d2"}
            })
        .then((res)=>{
            this.setState({title:"", description: "", price: "", paymentMethods: [], dueDate: "",})
            alert(`Seu serviço ${this.state.title} foi adicionado com sucesso!`)
            this.props.pegarServicos()
        })
        .catch((error)=>{
            alert("Deu um erro inesperado! Tente novamente.")
        })
        
    }

    render(){
        
        return(
            <ContainerCard>
                <ContainerText>
                <img src={require('../../img/Sofa-Cadastro.png')} alt="imagem de um sofa com mesinha" />
                <h1>SE TORNE UM NINJA</h1>
                <h4>Mostre-nos seu talento!</h4>
                </ContainerText>
                <ContainerCadastro>
                <input
                type="text"
                placeholder={"Titulo"}
                value={this.state.title}
                onChange={this.handleTitulo}
                />
                <input
                type="text"
                placeholder={"Descrição"}
                value={this.state.description}
                onChange={this.handleDescricao}
                />
                <input
                type= "Number"
                placeholder={"Preço"}
                value={this.state.price}
                onChange={this.handlePreco}
                />
                
                 <select multiple value={this.state.paymentMethods} 
                 onChange={this.handleFormaDPagamento}
                 placeholder={"Forma de Pagamento"}>
                     <option>Cartão de Débito</option>
                     <option>Cartão de Crédito</option>
                     <option>PayPal</option>
                     <option>Boleto</option>
                     <option>Pix</option>
                 </select>
                 <input
                 type="date"
                 value={this.state.dueDate}
                 onChange={this.handleData}
                 />
                 <button onClick={this.criarEmprego}>Cadastrar Serviços</button>
                 </ContainerCadastro>
                 
            </ContainerCard>
        )
    }
}