import React from 'react';
import styled from 'styled-components';

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

	render() {
		return (
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
		);
	  }
	}
	

    export default PaginaDeServicos;