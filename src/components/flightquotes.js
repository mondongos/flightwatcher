import React from 'react'
import {fetchSkyScanner} from './utils/browsequotesapi'

export default class FlightQuotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.getAPI()
    }
    async getAPI() {
        const data = await fetchSkyScanner("LHR-sky", "JFK-sky", "2019-12-06", "2020-01-08")
        this.setState({data})
        console.log(this.state.data)
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
                        return <p>{quote.MinPrice}</p>
                    })}
                </div>
         </React.Fragment>
        )
    }
}