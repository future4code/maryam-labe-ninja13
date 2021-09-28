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
    trabalhos: []
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
    const listaDeTrabalhos = this.state.trabalhos.map((trabalho) => {
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
                placeholder = 'Valor mínimo'
                />

                <EstiloInput
                placeholder = 'Valor máximo'
                />

                <EstiloInput
                placeholder = 'Busca por título'
                />

			    <EstiloSelect>
                    <option>Sem ordenação</option>
                    <option>Menor valor</option>
                    <option>Maior valor</option>
                    <option>Título</option>
                    <option>Prazo</option>
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