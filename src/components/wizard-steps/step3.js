import React from 'react'

export default class Step3 extends React.Component {
    render() {
        if(this.props.currentStep !== 3) {
            return null
        }
        return (
            <div className="form-group">
            <input
            className="form-inputs"
            id="origin"
            name="origin"
            type="text"
            placeholder="Enter origin"
            value={this.props.origin}
            onChange={this.props.handleChange}
            />
            <input
            className="form-inputs"
            id="destination"
            name="destination"
            type="text"
            placeholder="Enter destination"
            value={this.props.destination}
            onChange={this.props.handleChange}
            />
        </div>
        )
    }
}