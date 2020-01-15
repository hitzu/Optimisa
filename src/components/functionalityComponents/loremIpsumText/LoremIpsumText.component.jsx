import React, { Component } from 'react'
import "./loremIpsumText.css"


export class LoreIpsumText extends Component {

    render () {

        const { text } = this.props

        return(
            <div className="containerLorem">
                {text}
            </div>
        )
    }

}