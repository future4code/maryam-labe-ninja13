
import React from 'react';

import AddNinja from './components/TelaAddNinja/AddNinja';
import PaginaDeServicos from './components/PaginaDeServicos/PaginaDeServicos'

export default class App extends React.Component{
	render(){
		return (
        <div>
      <PaginaDeServicos/>
			<AddNinja/>
		</div>
			)
	}
	
}


