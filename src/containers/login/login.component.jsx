import React, { Component } from 'react'
import  "./login.component.css"
import { LoginAndRegisterContainer } from "../../components/login&RegisterComponents";
import { NavigationBar } from "../../components/functionalityComponents/navigationBar";
export  class Login extends Component {

    render() {
        return (
            <div className = "container">
                <div className="header">
					<NavigationBar>

					</NavigationBar>
				</div>
                <div className = "content-container">
                    <LoginAndRegisterContainer></LoginAndRegisterContainer>
                </div>
            </div>
        )
    }
}
