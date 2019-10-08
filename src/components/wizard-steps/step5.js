import React from 'react'

export default class Step5w extends React.Component {
    render() {
        if(this.props.currentStep !== 5) {
            return null
        }
        return (
            <div className="form-group">
                <input
                className="form-inputs"
                id="maxPrice"
                name="maxPrice"
                type="text"
                placeholder="Maximum Price"
                value={this.props.maxPrice}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}