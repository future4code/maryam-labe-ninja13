
import React from 'react';

import AddNinja from './components/TelaAddNinja/AddNinja';
import PaginaDeServicos from './components/PaginaDeServicos/PaginaDeServicos'
import PaginaInicial from './components/PaginaInicial/PaginaInicial'

export default class App extends React.Component{
	render(){
		return (
        <div>
			<PaginaInicial/>
      		<PaginaDeServicos/>
			<AddNinja/>
		</div>
		)
	}
	
}


