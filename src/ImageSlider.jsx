import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor() { 
        super() 
        this.state = {
            currentSlideIndex: 0
        }
    }
    increment = () => {
        // NewCount = this.state +1
        // this.setState({
        //     count: NewCount
        // })
    }
    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}



