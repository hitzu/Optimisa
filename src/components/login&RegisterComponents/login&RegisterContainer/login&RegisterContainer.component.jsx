import React, { Component } from 'react'
import  "./login&RegisterContainer.component.css";
import { LoginFormContainer } from "../loginFormContainer";
export  class LoginAndRegisterContainer extends Component {

	constructor(props){
		super(props)
	}

	
	render() {

		return (
			<div className = "loginBox">
				<div className = "form-container">
					<div className="container-login">
						<LoginFormContainer></LoginFormContainer>
					</div>
				</div>
			</div>
		)
	}
}
