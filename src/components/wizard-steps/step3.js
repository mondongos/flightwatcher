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
                id="destination"
                name="destination"
                value={this.props.destination}
                onChange={this.props.handleChange}
                >
                    <option value="Glasgow">Glasgow</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Miami">Miami</option>
                    <option value="Rome">Rome</option>
                </select>
            </div>
        )
    }
}