import React, { Component } from 'react'
import { NavigationBar } from "../../components/functionalityComponents/navigationBar";
import { LoreIpsum, PieChart, TableCurrentBalance, NewTransferComponent } from "../../components/dashBoardComponents"
import "./dashboard.component.css"
import SecureLS from "secure-ls";
export class Dashboard extends Component {

	constructor(props){
		super(props)
		this.ls = new SecureLS({encodingType: 'rabbit', isCompression: true, encryptionSecret: 'OpTimiSSa'});
		let decodedData = this.ls.get("metadata")
		this.state = {
			userName: decodedData.data.name,
			viewInitial : 1,
			viewState : 1,
			balance : [
				{ 
					account:123456789, 
					balance: 
					{ currency : "€", value: 765095.54 }, owner: 7612333392, createdAt: "2012-04-23T18:25:43.511Z" 
				}, 
				{ 
					account :987654321, 
					balance: 
					{ currency: "$", value: 524323.54 }, owner: 7612333392, createdAt: "2012-04-23T18:25:43.511Z" } 
				]
		}
	}

	changeView = (view) => {
		this.setState({
			viewState : view
		})
	}

	render (){
		const { viewState } = this.state
		return (
			<div className="dashboard-main-container">
				<div className="header">
					<NavigationBar
						from = "dashboard"
						changeView = {this.changeView}
					>
					</NavigationBar>
				</div>
				{
				viewState == 1 ? 
				<>
					<div className="bodyHome">
						<div className="welcomeUser">
							Welcome to your online banking {this.state.userName}
						</div>
						<div className="containerFragments">
							<div className="transactionPie">
								<PieChart /> 
							</div>
							<div className="exampleLorem">
								<LoreIpsum />
							</div>
							<div className="table">

							</div>
						</div>					
					</div>
				</> :
				<>
					<div className="bodyTransfer">
						<div className="containerTransferAndChart">
							<div className="transfer">
								<NewTransferComponent 
									balance = {this.state.balance}
								>
								</NewTransferComponent>
							</div>
							<div className="chart"></div>
						</div>
						<div className="tables"></div>
					</div>
				</>
				}
			</div>
		)
	}

}
