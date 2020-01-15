import React, { Component } from 'react'
import { NavigationBar } from "../../components/functionalityComponents/navigationBar";
import { LoreIpsum, PieChart } from "../../components/dashBoardComponents"
import "./dashboard.component.css"
import SecureLS from "secure-ls";
export class Dashboard extends Component {

	constructor(props){
		super(props)
		this.ls = new SecureLS({encodingType: 'rabbit', isCompression: true, encryptionSecret: 'OpTimiSSa'});
		let decodedData = this.ls.get("inverso_metadata")
		console.log(decodedData.data)
		this.state = {
			userName: decodedData.data.name,
			viewInitial : 1,
			viewState : 1
		}
	}

	changeView = (view) => {
		this.setState({
			viewState : view
		})
	}

	render (){
		return (
			<div className="dashboard-main-container">
				<div className="header">
					<NavigationBar
						from = "dashboard"
						changeView = {this.changeView}
					>
					</NavigationBar>
				</div>
				<div className="body">
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
			</div>
		)
	}

	// componentDidMount(){
	// 	// console.log(this.state);
	// }

	// openFullGrafffiti = (idGraffiti)=>{
	// 	console.log("idGraffiti--->",idGraffiti);
	// 	this.setState({showDetailContent:"graffiti",idContentSelected:idGraffiti})
	// }
	// closeDetailView = ()=>{
	// 	this.setState({showDetailContent:"",idContentSelected:""})
	// }

	// updateOrigin = (originIndex)=>{
	// 	switch (originIndex) {
	// 		case 1:
	// 			this.setState({currentOrigin:"mine"})
	// 			break;
	// 		case 2:
	// 			this.setState({currentOrigin:"collected"})
	// 			break;
	// 		case 3:
	// 			this.setState({currentOrigin:"myChanels"})
	// 			break;
	// 		case 4:
	// 			this.setState({currentOrigin:"contacts"})
	// 			break;
		
	// 		default:
	// 			break;
	// 	}
	// }

	// render() {
	// 	return (
	// 		<div className="dashboard-main-container">
	// 			<div className="header">
	// 				<NavigationBar 
	// 					titleSection = "Dashboard" 
	// 					contextualSearch = {(searchWord)=>{console.log("busca ",searchWord)}} switchSelectedProfile = {(index)=>{console.log("sleeccione ",index)}}
	// 					personalProfile = {this.state.personalCard.positionPictureProfileBubbleView}
	// 					personalProfileImage = {this.state.personalCard.pictureProfile.small}
	// 					professionalProfile = {this.state.professional?this.state.professional.coverBackground:null}
	// 					professionalProfileImage = {this.state.professional?this.state.professional.pictureProfile.small:null}
	// 					></NavigationBar>
	// 			</div>
	// 			<div className="body">
	// 				<div className="column-profile">
	// 					<div className="cardPreview">
	// 						<PersonalCardPreview titleCard = "Lili Wallace" card = {this.state.currentSelectedCard} location = "San Francisco, USA"></PersonalCardPreview>
	// 					</div>
	// 					<button className="editCard">Edit Card</button>
	// 					<div className="metrics">
	// 						<div className = "unitMetric">
	// 							<div className="value">
	// 								<img src={ViewsIcon} alt="" className="iconMetricViews"/>
	// 								<h4>{234+"k"}</h4>
	// 							</div>
	// 							<div className="title">
	// 								Card Views
	// 							</div>
	// 						</div>
	// 						<div className = "unitMetric">
	// 							<div className="value">
	// 								<img src={FollowersIcon} alt="" className="iconMetricFollows"/>
	// 								<h4>{234+"k"}</h4>
	// 							</div>
	// 							<div className="title">
	// 								Followers
	// 							</div>
	// 						</div>
	// 						<div className = "unitMetric">
	// 							<div className="value">
	// 								<img src={SharesIcon} alt="" className="iconMetricShares"/>
	// 								<h4>{234+"k"}</h4>
	// 							</div>
	// 							<div className="title">
	// 								Card Shares
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className="related-content">
	// 					<DetachableContentContainer 
	// 						graffitiClicked = {this.openFullGrafffiti}
	// 						currentSelectedProfileToken = {this.state.currentSelectedCard.token}
	// 						updateOrigin = {this.updateOrigin}>

	// 						</DetachableContentContainer>
	// 				</div>
	// 				{this.state.showDetailContent == "graffiti" ? 
	// 				<div className="detailContentSelected">
	// 					<GraffitiCarousel 
	// 						origin = {this.state.currentOrigin}
	// 						idGraffitiSelected ={this.state.idContentSelected}
	// 						goBack = {this.closeDetailView} 
	// 						profileToken = {this.state.currentSelectedCard.token}
	// 						></GraffitiCarousel>
	// 				</div>:null}
	// 			</div>
	// 		</div>
	// 	)
	// }
}
