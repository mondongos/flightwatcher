import React from 'react'

export default class Step2 extends React.Component {
    render() {
        if(this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <input
                className="form-inputs"
                id="phoneNum"
                name="phoneNum"
                type="text"
                placeholder="Enter phone number"
                value={this.props.phoneNum}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}