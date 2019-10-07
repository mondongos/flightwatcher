import React from 'react'

export default class Step4 extends React.Component {
    render() {
        if(this.props.currentStep !== 4) {
            return null
        }
        return (
            <div className="form-group">
                <input
                className="form-inputs"
                id="startDate"
                name="startDate"
                type="date"
                placeholder="Enter start"
                value={this.props.startDate}
                onChange={this.props.handleChange}
                />
                <input
                className="form-inputs"
                id="endDate"
                name="endDate"
                type="date"
                placeholder="Enter end"
                value={this.props.endDate}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}