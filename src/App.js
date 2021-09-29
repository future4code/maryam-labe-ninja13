
import React from 'react';

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import PaginaDeCadastro from './components/PaginaDeCadastro/PaginaDeCadastro';
// import PaginaDeServicos from "./components/PaginaDeServicos/PaginaDeServicos"


export default class App extends React.Component{
	// state={
	// 	pagina: "Inicial"
	// }

	// paginaInicial = () =>{
	// 	this.setState = () =>{
	// 		this.setState({pagina: "Inicial"})
	// 	}
	// }

	// paginaCarrinho = () =>{
	// 	this.setState({pagina: "Carrinho"})
	// }

	// paginaCadastro = ()=>{
	// 	this.setState({pagina: "Cadastro"})
	// }

	// paginaServicos = () =>{
	// 	this.setState({pagina: "Servicos"})
	// }

	// renderizarPaginas = () =>{
	// 	switch(this.state.pagina){
	// 		case "Inicial":
	// 			return <PaginaInicial paginaInicial={this.paginaInicial}/>
	// 		case "Cadastro":
	// 			return <PaginaDeCadastro/>
	// 		case "Servicos":
	// 			return <PaginaDeServicos/>
	// 		default:
	// 			return<PaginaInicial/>
	// 	}
	// }
	render(){
		return (
        <div>
	<PaginaDeCadastro/>
		</div>
			)
	}
	
}


