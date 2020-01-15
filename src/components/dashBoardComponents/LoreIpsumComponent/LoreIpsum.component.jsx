import React, { Component } from 'react'
import { LoreIpsumText } from '../../functionalityComponents/loremIpsumText'
import "./loremIpsum.css"


export class LoreIpsum extends Component {

    render () {
        return(
            <div className="containerLorem">
                <div className="image">
                    320x200
                </div>
                <div className="title">
                    Main Expenses
                </div>
                <div className="text">
                    <LoreIpsumText
                        text = {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in quam quis felis fermentum varius id sed leo. Phasellus euismod tincidunt arcu vel gravida. Proin a ornare dolor, quis tincidunt nisl. Quisque vitae enim vitae est convallis tincidunt. Sed accumsan elit quis augue vulputate, eu vestibulum orci blandit. Etiam vel tellus quis nisl consequat imperdiet. Curabitur accumsan at nibh in dignissim. Nunc viverra porttitor dui nec dictum. Vivamus tempus nec leo vel ullamcorper. In non sem eu lorem venenatis efficitur. Suspendisse semper ut ipsum vitae placerat.

                        In non erat arcu. Nullam ipsum sem, lacinia quis posuere ut, eleifend at nibh. Mauris lectus eros, accumsan in ante non, gravida dapibus sem. Etiam tempor nisl ut eros tincidunt, at elementum tortor sodales. Praesent in turpis sollicitudin mauris condimentum elementum. Morbi eu rhoncus quam, sit amet tempus elit. Vestibulum mattis ex urna. Suspendisse dapibus laoreet finibus. Praesent sed massa ac turpis fringilla imperdiet. Proin sit amet euismod neque. Praesent at rutrum odio, eget tincidunt est. Sed sit amet lacinia massa. Aenean sed est diam. `}

                    ></LoreIpsumText>
                </div>
            </div>
        )
    }

}