import React from 'react'
import Step1 from './wizard-steps/step1'
import Step2 from './wizard-steps/step2'
import Step3 from './wizard-steps/step3'
import Step4 from './wizard-steps/step4'
import Step5 from './wizard-steps/step5'

export default class StartWizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1, 
            destination: '',
            startDate: '', 
            endDate: '', 
            maxPrice: '', 
            firstName: '', 
            lastName: '', 
            email: '', 
            phoneNum: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onComplete(this.state);
    }
    
    nextStep = () => {
        let currentStep = this.state.currentStep
        if (this.state.currentStep >= 4) {
            this.setState({
                currentStep: 5
            })
        } else {
            this.setState({
                currentStep: currentStep + 1, 
            })
        }
        console.log(this.state)
    }

    previousStep = () => {
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

    previousButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep != 1) {
            return (
                <button
                className="btn btn-primary"
                onClick={this.previousStep}>
                    Back
                </button>
            )
        } else {
            return null
        }
    }

    nextButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep < 5) {
            return (
                <button
                className="btn btn-primary"
                onClick={this.nextStep}>
                    Next
                </button>
            )
        } else {
            return null
        }
    }

    submitButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep == 5) {
            return (
                <button
                className="btn btn-secondary"
                onClick={this.handleSubmit}
                >
                    Submit
                </button>
            )
        } else {
            return null
        }
    }

    render() {
        return(
            <React.Fragment>
                <h1>FlightWatcher</h1>
                <h4>Step {this.state.currentStep}</h4>
                <form onSubmit={this.handleSubmit}>

                <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                />
                <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                phoneNum={this.state.phoneNum}
                />
                <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                destination={this.state.destination}
                />
                <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                destination={this.state.destination}
                />
                 <Step5
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                destination={this.state.destination}
                />
                {this.previousButton()}
                {this.nextButton()}
                {this.submitButton()}
                </form>
            </React.Fragment>
        )
    }
}