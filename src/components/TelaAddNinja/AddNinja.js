import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerCadastro = styled.div`
    display:inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 50%;
    height:100vh;
    width:50%;
    background-color: #7867BF;

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
    height:100vh;
    width:50%;
`
export default class AddNinja extends React.Component{
    state={
        titulo: "",
        descricao: "",
        preco: "",
        formaDPagamento: [],
        data: ''

    }

    handleTitulo = (e)=>{
        this.setState({titulo: e.target.value})
    }

    handleDescricao = (e)=>{
        this.setState({descricao: e.target.value})
    }

    handlePreco = (e)=>{
        this.setState({preco: e.target.value})
    }

    handleFormaDPagamento = (e)=>{
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({formaDPagamento: value})
    }

    handleData = (e)=>{
        this.setState({data: e.target.value})
    }

    criarEmprego = ( ) =>{
        const body = {
            titulo: this.state.titulo,
            descricao: this.state.descricao,
            preco: Number(this.state.preco),
            formaDPagamento: this.state.formaDPagamento,
            data: this.state.data
        }

        const url = "https://labeninjas.herokuapp.com/jobs"
        

        axios.post(url, body, { 
            headers:{
            Authorization: "fd0c113e-8948-4507-8abd-386524fa9ced"}
            })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){

        return(
            <div>
                <ContainerText>
                <h1>SE TORNE UM NINJA</h1>
                <p>Mostre-nos seu talento!</p>
                </ContainerText>
                <ContainerCadastro>
                <input
                placeholder={"Titulo"}
                value={this.state.titulo}
                onChange={this.handleTitulo}
                />
                 <input
                placeholder={"Descrição"}
                value={this.state.descricao}
                onChange={this.handleDescricao}
                />
                 <input
                 type= "Number"
                placeholder={"Preço"}
                value={this.state.preco}
                onChange={this.handlePreco}
                />
                
                 <select multiple value={this.state.formaDPagamento} 
                 onChange={this.handleFormaDPagamento}
                 placeholder={"Forma de Pagamento"}>
                     <option>Cartão de Débito</option>
                     <option>Cartão de Crédito</option>
                     <option>PayPal</option>
                     <option>Boleto</option>
                     <option>Pix</option>
                 </select>
                 <input
                 id="date"
                 type="date"
                 value={this.state.data}
                 onChange={this.handleData}
                 />
                 <button onClick={this.criarEmprego}>Cadastrar Serviços</button>
                 </ContainerCadastro>
                 
            </div>
        )
    }
}