import React, { Component } from 'react'
import "./inputLabeled.component.css"

export class InputLabeled extends Component {
 
    inputChange = (event)=>{
        this.props.onChange(event.target.value)
        
    }

    render() {
        return (
            <div className="inputContainer" style = {{width:this.props.width?this.props.width:"82%"}}>
                <span className= "titleInput">{this.props.title.toUpperCase()}</span>
                {this.props.invalidInput ? (<span className="errorMsg">{this.props.invalidInputMsg}</span>):null}
                <input className = {this.props.invalidInput ? "invalidInput":""} type={this.props.type?this.props.type:"text"} placeholder = {this.props.placeholder} onChange={ this.inputChange }/>
            </div>
        )
    }
}