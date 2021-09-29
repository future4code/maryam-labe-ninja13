import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerGrid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2fr) 1fr ;
    width:100vw;
    height:100vh;
`

const ContainerCadastro = styled.div`
    display:inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 50%;
    background-color: #7867BF;
    border: 1px solid black;

    input{
        margin-top: 10px;
        height: 20px;
        width:30em;
        
    }

    select{
        margin-top: 10px;
        height: 30px;
        width: 30vw;
    }

    button{
        margin-top:10px;
    }
`

const ContainerText = styled.div`
    font-size: 20px;
    display:inline-flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50%;
    border: 1px solid black;
`
export default class AddNinja extends React.Component{
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
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    render(){
        
        return(
            <ContainerGrid>
                <ContainerText>
                <h1>SE TORNE UM NINJA</h1>
                <p>Mostre-nos seu talento!</p>
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
                 
            </ContainerGrid>
        )
    }
}