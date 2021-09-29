import React from 'react';
import styled from 'styled-components';
import CardDeServicos from './CardDeServico';
import axios from 'axios';

const EstiloFiltros = styled.div`
display: flex;
justify-content: space-between;
margin-left: 15px;
margin-right: 15px;
margin-bottom: 40px;
margin-top: 40px;
`

const EstiloInput = styled.input`
width: 250px;
`
const EstiloSelect = styled.select`
width: 250px;
`




class PaginaDeServicos extends React.Component {
  state = {
    trabalhos: [],
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


  componentDidMount () {
    this.pegarServicos()
  }

  pegarServicos= () =>{

    const url ="https://labeninjas.herokuapp.com/jobs"

    axios.get(url, {
      headers: {
        Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
      }
      })
      
      .then((res) => {
        console.log(res)
        this.setState({trabalhos:res.data.jobs})
      })
      
      .catch((err) =>{
        console.log(err)
      })
    
  }

	render() {
    const listaDeTrabalhos = this.state.trabalhos
    .filter(trabalho =>{
      return trabalho.title.toLowerCase().includes(this.state.query.toLowerCase()) 
      // || trabalho.description.toLowerCase().includes(this.state.query.toLowerCase())
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
      />
    })
    console.log(this.state.trabalhos)
		return (
      <div>
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

          <div>
                    {listaDeTrabalhos}
          </div>
      </div>
		);
	  }
	}
	

    export default PaginaDeServicos;