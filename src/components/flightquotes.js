import React from 'react'
import {fetchSkyScanner} from './utils/browsequotesapi'

export default class FlightQuotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            wizard: null
        }
        this.getAPI()
    }
    async getAPI() {
        let {destination, origin, startDate, endDate} = this.props.wizardData
        const data = await fetchSkyScanner("LHR-sky", "JFK-sky", startDate, endDate)
        this.setState({data})
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.data && this.state.data.Places.map(place => {
                        return <p>{place.Name}</p>
                    })}
                </div>
                <div>
                    {this.state.data && this.state.data.Quotes.map(quote => {
                        if(quote.Direct) {
                        return <p>{quote.MinPrice}</p>
                    }})}
                </div>
         </React.Fragment>
        )
    }
}