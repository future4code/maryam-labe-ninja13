import React from 'react'
import styled from 'styled-components'
import PaginaInicial from './components/PaginaInicial/PaginaInicial'
import PaginaDeCadastro from './components/PaginaDeCadastro/PaginaDeCadastro.js'
import PaginaDeServicos from './components/PaginaDeServicos/PaginaDeServicos.js'


class App extends React.Component {
	state={
		paginaAtual:"inicio"
	}
	
	escolhePagina= () =>{
		switch(this.state.paginaAtual){
			case "inicio":
				return <PaginaInicial/>
			case "cadastre":
				return <PaginaDeCadastro/>
			case "contrate":
				return <PaginaDeServicos/>
			default:
				return <PaginaInicial/>
		}
	}

	render(){
		return (
			<div>
				{this.escolhePagina()}
			</div>
		)
	}
}
export default App
