import React from 'react'
import Step1 from './wizard-steps/step1'
import Step2 from './wizard-steps/step2'
import Step3 from './wizard-steps/step3'

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
        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.previousButton = this.previousButton.bind(this)
        this.nextButton = this.nextButton.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {destination, startDate, endDate, maxPrice, firstName, lastName, email, phoneNum} = this.state
        
    }
    
    nextStep() {
        let currentStep = this.state.currentStep
        if (this.state.currentStep >= 5) {
            this.setState({
                currentStep: 6
            })
        } else {
            this.setState({
                currentStep: currentStep + 1, 
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

    previousButton() {
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

    nextButton() {
        let currentStep = this.state.currentStep
        if(currentStep < 6) {
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
                {this.previousButton()}
                {this.nextButton()}
                </form>
            </React.Fragment>
        )
    }
}