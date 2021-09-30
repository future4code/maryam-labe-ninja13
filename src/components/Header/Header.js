import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: purple;
`
const Button = styled.button`
    border: none;
    padding: 8px 60px;
    margin: 4px 2px;
    cursor: pointer;
`

export default class Header extends React.Component{
    // state = {
    // 	currentPage: "paginaInicial"
    // }

    // changePage = (currentPage) => {
	// 	this.setState({currentPage: currentPage})
	//   }
    render(){

    // const renderCurrentPage = () => {
	// 	if(this.state.currentPage === "paginaInicial"){
	// 	  return <PaginaInicial/>
	// 	}else if(this.state.currentPage === "paginaDeServicos"){
	// 	  return<PaginaDeServicos/>
	// 	}
		// }

    return(
        <ContainerHeader>
            <div>ImagemLogo</div>
            <h3> LabeNinjas </h3>
            <div>
                {/* <Button onClick={() => props.changePage("paginaInicial")}>Home</Button>
                <Button onClick={() => props.changePage("paginaDeServicos")}>Serviços</Button>   */}
                <Button onClick= {this.props.paginaInicial}>Home</Button>
                <Button onClick= {this.props.paginaServicos}>Serviços</Button>
                </div>
        </ContainerHeader>
        )

    }
}