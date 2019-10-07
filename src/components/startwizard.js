import React from 'react'

export default class StartWizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1
        }
    }

    nextStep() {
        let currentStep = this.state.currentStep
        if (this.state.currentStep >= 4) {
            this.setState({
                currentStep: 5
            })
        } else {
            this.setState({
                currentStep: currentStep + 1
            })
        }
    }

    previousStep() {
        let currentStep = this.state.currentStep
        if (this.state.currentStep <= 1) {
            this.setState({
                currentStep: 1
            }) 
        } else {
            this.setState({
                currentStep: currentStep - 1
            })
        }
    }

    render() {
        return(
            <div>Hello</div>
        )
    }
}