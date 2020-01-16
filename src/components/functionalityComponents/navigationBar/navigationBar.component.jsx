import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import "./navigationBar.component.css"

export class NavigationBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            viewSelected:1,
            goTologin : false
        }
    }

    logOut = () => {
        localStorage.clear();
        this.setState({
            goTologin : true
        })
    }

    changeViewFunction = (view) => {
        this.setState({
            viewSelected : view
        })
        this.props.changeView(view)
    }

	render() {

        if (this.state.goTologin) {
			return(
				<Redirect to = {{pathname : "/login"}}></Redirect>
			)
		}

        const { from } = this.props
        const { viewSelected } = this.state

        const active = { backgroundColor: "#777", color: '#FFF' }
        const disable = { backgroundColor: "#000", color: '#FFF' }

		return (
			<div className = "navbarContainer">
				<div className="navItemMenu title">
                    Optimissa
                </div>
                {from == 'dashboard' ?
                <>
                    <div style = { viewSelected == 1 ? active : disable } className="navItemMenu title" onClick={ () => this.changeViewFunction(1)}>
                        Home
                    </div>
                    <div style = { viewSelected == 2 ? active : disable } className="navItemMenu title" onClick={ () => this.changeViewFunction(2)}>
                        Transfer
                    </div>
                    <div className="navItemMenu logout" onClick={this.logOut}>
                        Log Out
                    </div>
                </>
                : <></> }
			</div>
		)
	}
}

export default NavigationBar
