import React from 'react'

export default class Step3 extends React.Component {
    render() {
        if(this.props.currentStep !== 3) {
            return null
        }
        return (
            <div className="form-group">
            <select
                className="form-inputs"
                id="origin"
                name="origin"
                value={this.props.origin}
                onChange={this.props.handleChange}>
                    <option value="LHR-sky">London</option>
                    <option value="GLAS-sky">Glasgow</option>
            </select>
            <select
                className="form-inputs"
                id="destination"
                name="destination"
                value={this.props.destination}
                onChange={this.props.handleChange}>
                    <option value="LAX-sky">Los Angeles</option>
                    <option value="MIA-sky">Miami</option>
                    <option value="ROME-sky">Rome</option>
                    <option value="TYOA-sky">Tokyo</option>
                    <option value="MDEA-sky">Medellin</option>
                    <option value="JFK-sky">New York</option>
                    <option value="DPS-sky">Bali</option>
            </select>
        </div>
        )
    }
}