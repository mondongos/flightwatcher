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
        const data = await fetchSkyScanner()
        this.setState({data})
    }
    render() {
        console.log(this.state.data && this.state.data.Places)
        return (
            <div>
                
            {this.state.data && this.state.data.Places.map(place => {
                return <p>{place.Name}</p>
            })}
            </div>
        )
    }
}