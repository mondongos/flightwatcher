import React from 'react'

export default class Step1 extends React.Component {
    render() {
        if(this.props.currentStep !== 1) {
            return null
        }
        return (
            <div className="form-group">
                <input
                className="form-inputs"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={this.props.email}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}