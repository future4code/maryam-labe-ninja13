
import React from 'react';

import axios from 'axios';

import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import Header  from './components/Header/Header'
import Footer from './components/Footer/Footer';
import PaginaDeCadastro from './components/PaginaDeCadastro/PaginaDeCadastro';
import PaginaDeServicos from './components/PaginaDeServicos/PaginaDeServicos';
import Carrinho from './components/Carrinho/Carrinho.Js';




	adicionarAoCarrinho = (produt) => {


export default class App extends React.Component{
	state={
	pagina: "inicial",
	servicosLoja: [],
	servicosCarrinho: [],
	precoTotal:0
	}

	adicionarAoCarrinho = (produt) => {


        alert("Comprou uma "+produt.title)
        
        const itemCarrinho = this.state.servicosLoja.find(produto => produto.id === produt.id);
        const valorProduto=produt.preco;
        let total=this.state.precoTotal+valorProduto;
        const novoArray = [...this.state.servicosCarrinho, itemCarrinho];
        this.setState({ servicosCarrinho: novoArray })
        this.setState({precoTotal:total})
        console.log(this.state.precoTotal)
		console.log(this.state.servicosCarrinho)
    }

	componentDidMount () {
		this.pegarServicos()
	}
	
	pegarServicos= () =>{
	
		const url ="https://labeninjas.herokuapp.com/jobs"
	
		axios.get(url, {
			headers: {
			Authorization: "2bdafc4e-63bc-428c-8b6e-154eedb905d2"
		}
		})
		
		.then((res) => {
			console.log(res)
			this.setState({servicosLoja:res.data.jobs})
			console.log(this.state.servicosLoja)
		})
		
		.catch((err) =>{
			console.log(err)
		})
		
	}
	paginaInicial = () =>{

		
		this.setState({pagina: "inicial"})
		

	}

	paginaCarrinho = () =>{
		this.setState({pagina: "carrinho"})
	}

	paginaCadastro = ()=>{
		this.setState({pagina: "cadastro"})
	}

	paginaServicos = () =>{
		this.setState({pagina: "servicos"})
	}

	renderizarPaginas = () =>{
		switch(this.state.pagina){
			case "inicial":
				return <PaginaInicial paginaCadastro={this.paginaCadastro} paginaServicos= {this.paginaServicos}/>
			case "cadastro":
				return <div>

					<Header paginaServicos= {this.paginaCarrinho} paginaInicial= {this.paginaInicial}/>

					<PaginaDeCadastro pegarServicos = {this.pegarServicos}/>
				</div>
			case "servicos":
				return <div>

				<Header paginaServicos= {this.paginaCarrinho} paginaInicial= {this.paginaInicial}/>
				<PaginaDeServicos servicosLoja= {this.state.servicosLoja} adicionarAoCarrinho={this.adicionarAoCarrinho}/>
				<Footer/>
				</div>
			case "carrinho":
				return <div>
				<Header paginaServicos= {this.paginaCarrinho} paginaInicial= {this.paginaInicial}/>
				<Carrinho servicosCarrinho= {this.state.servicosCarrinho}/>
				<Footer/>
				</div> 	 

			default:
				return<PaginaInicial/>
	}
}
	
	render(){
		return (
        <div>
			
			{this.renderizarPaginas()}	
		</div>
		)
	}
	
}


