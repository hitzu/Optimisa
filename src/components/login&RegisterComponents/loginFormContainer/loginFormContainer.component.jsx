import React, { Component } from 'react'
import { InputLabeled } from "../imputLabeled";
import  "./loginFormContainer.component.css";
import SecureLS  from "secure-ls";
import {Redirect} from 'react-router-dom'

import * as LoginRegisterServices from "../services";
export class LoginFormContainer extends Component {

	constructor(props){
		super(props)

		this.state = {
			invalidLoginData:false, 
			goToDashboard:false,
			mailValid : false,
			passValid : false,
			formValid : false,
			invalidInputMsgMail : "",
			invalidInputMsgPass : "",
		}
		this.mail = ""
		this.password = ""
		this.ls = new SecureLS({encodingType: 'rabbit', isCompression: true, encryptionSecret: 'OpTimiSSa'});
		this.reMail = new RegExp('([a-zA-Z0-9!"$%&/@]){8,20}')
		this.rePass = new RegExp('(?=^.{8,20}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[!"$%&/]).*')
	}

	componentDidMount(){
		if (this.ls.get("inverso_metadata")) {
			this.goToDashboard()
		}
	}

	goToDashboard = ()=>{
		this.setState({goToDashboard:true})
	}

	validForm = () => {
		if (this.state.mailValid && this.state.passValid){
			this.setState({
				formValid : true
			})
		}
		
	}

	login = ()=>{
		let req = LoginRegisterServices.login(this.mail,this.password)
		if (req){
			let data = {name : this.mail.split("@")[0], mail : this.mail, password : this.password}
			this.ls.set('inverso_metadata', {data: data}); 
			this.goToDashboard()
		}
		else{
			this.setState({invalidLoginData:true})
		}
	}

	updateMail = (newData)=>{
		this.mail = newData
		if ( this.reMail.test(this.mail) ){
			this.setState({
				mailValid : true,
				invalidInputMsgMail : "",
				invalidLoginData : false
			})
			this.validForm()
		} 
		else{
			this.setState({
				invalidInputMsgMail : "error en formato de mail",
				invalidLoginData : true
			})
		}
	}

	updatePassword = (newData)=>{
		this.password = newData
		if ( this.rePass.test(this.password) ){
			this.setState({
				passValid : true,
				invalidInputMsgPass : "",
				invalidLoginData : false
			})
			this.validForm()
		} 
		else{
			this.setState({
				invalidInputMsgPass : "error en formato de password",
				invalidLoginData : true
			})
		}
	}

	render() {
		if (this.state.goToDashboard) {
			return(
				<Redirect to = {{pathname : "/dashboard"}}></Redirect>
			)
		}

		return (
			<div className="loginFormContainer">
				<h2>Prueba Tecnica Optimissa</h2>
				<InputLabeled invalidInput = {this.state.invalidLoginData} invalidInputMsg = {this.state.invalidInputMsgMail} onChange = {this.updateMail} title = "E-MAIL" placeholder ="ligia@optimissa.com"></InputLabeled>
				<InputLabeled type = "password" invalidInput = {this.state.invalidLoginData} invalidInputMsg = {this.state.invalidInputMsgPass} onChange = {this.updatePassword} title = "CONTRASEÑA" placeholder ="Padilla1!"></InputLabeled>
				<button onClick = {this.login} disabled={!this.state.formValid} style = {{opacity : !this.state.formValid ?  0.40 : 1.00}} >ACCESAR</button>
			</div>
		)
	}
}