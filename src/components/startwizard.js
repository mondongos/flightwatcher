import React from 'react'
import Step1 from './wizard-steps/step1'

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
        alert("Great Success!")
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

    get previousButton() {
        
    }

    render() {
        return(
            <React.Fragment>
                <h1>FlightWatcher</h1>
                <h4>Step {this.state.currentStep}</h4>
                <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                />
            </React.Fragment>
        )
    }
}