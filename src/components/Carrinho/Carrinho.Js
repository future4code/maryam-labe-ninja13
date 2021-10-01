import React from "react";

export default class Carrinho extends React.Component{

   

    render (){
            const listaCarrinho = this.props.servicosCarrinho.map((servico, index) =>{
                return  <div key={servico.id}>
                            <h3>{servico.title}</h3>
                            {servico.price}
                            <button onClick={() => this.props.removerDoCarrinho(index)}>Remover</button>
                        </div>     
           })
               
        return (
          <div> 
              {listaCarrinho}
              <div>
                  <h2>Valor Total:</h2>
                  {this.props.precoTotal}                
                
            </div>
            <button onClick={() => this.props.removerTudo()}>Contratar Serviços</button>
          </div>

        )
    }
}