import React, { Component } from 'react'
import { LoreIpsumText } from '../../functionalityComponents/loremIpsumText'
import "./tableCurrentBalance.css"


export class TableCurrentBalance extends Component {

    render () {
        return(
            <div className="chartContainer">
                <div className="chart">
                    Aqui ira la graffica
                </div>
                <div className="title">
                    Transactions History
                </div>
                <div className="text">
                    <LoreIpsumText
                        text = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in quam quis felis fermentum varius id sed leo. Phasellus euismod tincidunt arcu vel gravida. Proin a ornare dolor, quis tincidunt nisl. Quisque vitae enim vitae est convallis tincidunt. Sed accumsan elit quis augue vulputate, eu vestibulum orci blandit. Etiam vel tellus quis nisl consequat imperdiet. Curabitur accumsan at nibh in dignissim. Nunc viverra porttitor dui nec dictum. Vivamus tempus nec leo vel ullamcorper. In non sem eu lorem venenatis efficitur. Suspendisse semper ut ipsum vitae placerat.`}

                    ></LoreIpsumText>
                </div>
            </div>
        )
    }

}