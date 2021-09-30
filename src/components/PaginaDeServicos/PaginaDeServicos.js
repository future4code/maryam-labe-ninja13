import React from 'react';
import styled from 'styled-components';
import CardDeServicos from './CardDeServico';
import axios from 'axios';

const DivMae= styled.div`
background-color: #7867BF;
img{
    position:relative ;
    width:100%;
    height:100%;
    
}
`

const EstiloFiltros = styled.div`

display: flex;
justify-content: space-between;
margin-left: 15px;
margin-right: 15px;
margin-bottom: 40px;
margin-top: 40px;
position: absolute;
top:5%;
`
const EstiloInput = styled.input`
width: 250px;
`
const EstiloSelect = styled.select`
width: 250px;
`
const EstiloTrabalhos = styled.div`


display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 8px;
position: absolute;
top:15%;
`



class PaginaDeServicos extends React.Component {
  state = {
    
    query: '',
    filtroMin: '',
    filtroMax: '',
    ordenacao:'Sem ordenacao'
  }

  changeQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  onChangeFiltroMin = (event) => {
    this.setState({
      filtroMin: event.target.value
    })
  }

  onChangeFiltroMax = (event) => {
    this.setState({
      filtroMax: event.target.value
    })
  }

  onChangeOrdenacao = (event) => {
    this.setState({
      ordenacao: event.target.value
    })
  }




	render() {
    const listaDeTrabalhos = this.props.servicosLoja
    .filter(trabalho =>{
      return trabalho.title.toLowerCase().includes(this.state.query.toLowerCase()) 
      || trabalho.description.toLowerCase().includes(this.state.query.toLowerCase())
    })
    .filter(trabalho => {
      return this.state.filtroMin === '' || trabalho.price >= this.state.filtroMin
    })
    .filter(trabalho => {
      return this.state.filtroMax === '' || trabalho.price <= this.state.filtroMax
    })
    .sort((itemA,itemB) => {
      switch (this.state.ordenacao){
        case 'title':
          return itemA.title.localeCompare(itemB.title)
          case 'dueDate':
            return new Date(itemA.dueDate).getTime() - new Date(itemB.dueDate).getTime()
            case 'asc':
              return itemA.price - itemB.price 
              case 'desc':
              return itemB.price - itemA.price
                default:
                  return 'Sem ordenacao'

      }
  
    })
    .map((trabalho) => {
      return <CardDeServicos
      titulo= {trabalho.title}
      data= {trabalho.dueDate}
      preco= {trabalho.price}
      descricao = {trabalho.description}
      formasPagamento= {trabalho.paymentMethods}
      adicionarAoCarrinho={() =>this.props.adicionarAoCarrinho(trabalho)}
      />
    })
    
		return (
      <DivMae>
        <img src={require("../../img/backInicioECards.png")}/>
		    <EstiloFiltros>
    
                <EstiloInput
                  type = 'number'
                  placeholder = 'Valor mínimo'
                  value = {this.filtroMin}
                  onChange = {this.onChangeFiltroMin}
                />

                <EstiloInput
                  type = 'number'
                  placeholder = 'Valor máximo'
                  value = {this.filtroMax}
                  onChange = {this.onChangeFiltroMax}
                />

                <EstiloInput
                  type = 'text'
                  placeholder = 'Busca por título ou descrição'
                  value = {this.state.query}
                  onChange = {this.changeQuery}
                />

			          <EstiloSelect 
                  name = 'sort'
                  value = {this.state.ordenacao}
                  onChange = {this.onChangeOrdenacao}
                >
                    <option value = 'Sem ordenacao'>Sem ordenação</option>
                    <option value = 'asc'>Menor valor</option>
                    <option value = 'desc'>Maior valor</option>
                    <option value = 'title'>Título</option>
                    <option value = 'dueDate'>Prazo</option>
                </EstiloSelect>

		      </EstiloFiltros>

          <EstiloTrabalhos>
                    {listaDeTrabalhos}
          </EstiloTrabalhos>
      </DivMae>
		);
	  }
	}
	

    export default PaginaDeServicos;